/**
 * 测试脚本：验证 paintPixels 接口的内存优化效果
 * 
 * 使用方法：
 * 1. 确保服务器正在运行
 * 2. 修改下面的 BASE_URL 和 AUTH_TOKEN
 * 3. 运行: npx tsx test-paint-pixels.ts
 */

const BASE_URL = "http://localhost:3000"; // 修改为你的服务器地址
const AUTH_TOKEN = "your-auth-token"; // 修改为你的认证 token
const SEASON = "0";
const TILE_X = 0;
const TILE_Y = 0;

// 生成测试数据
function generatePixelData(count: number) {
	const colors: number[] = [];
	const coords: number[] = [];
	
	for (let i = 0; i < count; i++) {
		colors.push(Math.floor(Math.random() * 16)); // 0-15 颜色
		coords.push(
			Math.floor(Math.random() * 1000), // x: 0-999
			Math.floor(Math.random() * 1000)  // y: 0-999
		);
	}
	
	return { colors, coords };
}

async function testPaintPixels(pixelCount: number) {
	console.log(`\n=== 测试 ${pixelCount.toLocaleString()} 像素 ===`);
	
	const { colors, coords } = generatePixelData(pixelCount);
	const payloadSize = JSON.stringify({ colors, coords }).length;
	console.log(`请求体大小: ${(payloadSize / 1024).toFixed(2)} KB`);
	
	const startTime = Date.now();
	
	try {
		const response = await fetch(
			`${BASE_URL}/${SEASON}/pixel/${TILE_X}/${TILE_Y}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${AUTH_TOKEN}`
				},
				body: JSON.stringify({ colors, coords })
			}
		);
		
		const duration = Date.now() - startTime;
		const data = await response.json();
		
		console.log(`状态码: ${response.status}`);
		console.log(`响应时间: ${duration}ms`);
		console.log(`响应:`, JSON.stringify(data, null, 2));
		
		return {
			success: response.status === 200,
			duration,
			payloadSize
		};
	} catch (error) {
		const duration = Date.now() - startTime;
		console.error(`❌ 请求失败 (${duration}ms):`, error);
		return {
			success: false,
			duration,
			payloadSize,
			error
		};
	}
}

async function runTests() {
	console.log("开始测试 paintPixels 接口内存优化...\n");
	
	const testCases = [
		10_000,    // 1万
		50_000,    // 5万
		100_000,   // 10万
		200_000    // 20万
	];
	
	const results = [];
	
	for (const count of testCases) {
		const result = await testPaintPixels(count);
		results.push({ count, ...result });
		
		// 等待一下让 GC 回收
		await new Promise(resolve => setTimeout(resolve, 1000));
	}
	
	console.log("\n=== 测试结果汇总 ===");
	console.table(results.map(r => ({
		"像素数量": r.count.toLocaleString(),
		"请求大小(KB)": (r.payloadSize / 1024).toFixed(2),
		"响应时间(ms)": r.duration,
		"成功": r.success ? "✅" : "❌"
	})));
}

// 运行测试
runTests().catch(console.error);
