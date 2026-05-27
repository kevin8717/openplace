/**
 * 坐标转换工具类，基于前端C9类的实现
 * 提供纬度/经度与像素坐标之间的转换
 */

const EARTH_RADIUS = 6378137; // WGS84椭球体赤道半径（米）
const EARTH_CIRCUMFERENCE = Math.PI * 2 * EARTH_RADIUS; // 地球周长
const HALF_EARTH_CIRCUMFERENCE = EARTH_CIRCUMFERENCE / 2; // 地球周长的一半

export class CoordinateTransformer {
    private tileSize: number;
    private initialResolution: number;

    /**
     * 创建坐标转换器
     * @param tileSize 瓦片大小（像素），默认为256（前端C9类默认值）
     */
    constructor(tileSize: number = 256) {
        this.tileSize = tileSize;
        this.initialResolution = HALF_EARTH_CIRCUMFERENCE * 2 / this.tileSize;
    }

    /**
     * 计算指定缩放级别下的分辨率（米/像素）
     * @param zoom 缩放级别
     * @returns 分辨率（米/像素）
     */
    resolution(zoom: number): number {
        return this.initialResolution / 2 ** zoom;
    }

    /**
     * 将纬度/经度转换为Web墨卡托坐标（米）
     * @param lat 纬度（度）
     * @param lon 经度（度）
     * @returns [x, y] 米坐标
     */
    latLonToMeters(lat: number, lon: number): [number, number] {
        const x = lon / 180 * HALF_EARTH_CIRCUMFERENCE;
        const y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180) * HALF_EARTH_CIRCUMFERENCE / 180;
        return [x, y];
    }

    /**
     * 将Web墨卡托坐标（米）转换为纬度/经度
     * @param mx X坐标（米）
     * @param my Y坐标（米）
     * @returns [纬度, 经度]（度）
     */
    metersToLatLon(mx: number, my: number): [number, number] {
        const lon = mx / HALF_EARTH_CIRCUMFERENCE * 180;
        let lat = my / HALF_EARTH_CIRCUMFERENCE * 180;
        lat = 180 / Math.PI * (Math.atan(Math.exp(lat * Math.PI / 180)) * 2 - Math.PI / 2);
        return [lat, lon];
    }

    /**
     * 将像素坐标转换为Web墨卡托坐标（米）
     * @param px X像素坐标
     * @param py Y像素坐标
     * @param zoom 缩放级别
     * @returns [x, y] 米坐标
     */
    pixelsToMeters(px: number, py: number, zoom: number): [number, number] {
        const res = this.resolution(zoom);
        const x = px * res - HALF_EARTH_CIRCUMFERENCE;
        const y = HALF_EARTH_CIRCUMFERENCE - py * res;
        return [x, y];
    }

    /**
     * 将Web墨卡托坐标（米）转换为像素坐标
     * @param mx X坐标（米）
     * @param my Y坐标（米）
     * @param zoom 缩放级别
     * @returns [x, y] 像素坐标
     */
    metersToPixels(mx: number, my: number, zoom: number): [number, number] {
        const res = this.resolution(zoom);
        const x = (mx + HALF_EARTH_CIRCUMFERENCE) / res;
        const y = (HALF_EARTH_CIRCUMFERENCE - my) / res;
        return [x, y];
    }

    /**
     * 将像素坐标转换为纬度/经度
     * @param px X像素坐标
     * @param py Y像素坐标
     * @param zoom 缩放级别
     * @returns [纬度, 经度]（度）
     */
    pixelsToLatLon(px: number, py: number, zoom: number): [number, number] {
        const [mx, my] = this.pixelsToMeters(px, py, zoom);
        return this.metersToLatLon(mx, my);
    }

    /**
     * 将纬度/经度转换为像素坐标
     * @param lat 纬度（度）
     * @param lon 经度（度）
     * @param zoom 缩放级别
     * @returns [x, y] 像素坐标
     */
    latLonToPixels(lat: number, lon: number, zoom: number): [number, number] {
        const [mx, my] = this.latLonToMeters(lat, lon);
        return this.metersToPixels(mx, my, zoom);
    }

    /**
     * 将瓦片坐标和像素坐标转换为全局像素坐标
     * @param tileX 瓦片X坐标
     * @param tileY 瓦片Y坐标
     * @param pixelX 瓦片内像素X坐标
     * @param pixelY 瓦片内像素Y坐标
     * @param zoom 缩放级别
     * @returns [全局像素X, 全局像素Y]
     */
    tilePixelToGlobalPixels(tileX: number, tileY: number, pixelX: number, pixelY: number, zoom: number): [number, number] {
        const globalX = tileX * this.tileSize + pixelX;
        const globalY = tileY * this.tileSize + pixelY;
        return [globalX, globalY];
    }

    /**
     * 将瓦片坐标和像素坐标转换为纬度/经度
     * @param tileX 瓦片X坐标
     * @param tileY 瓦片Y坐标
     * @param pixelX 瓦片内像素X坐标
     * @param pixelY 瓦片内像素Y坐标
     * @param zoom 缩放级别
     * @returns [纬度, 经度]（度）
     */
    tilePixelToLatLon(tileX: number, tileY: number, pixelX: number, pixelY: number, zoom: number): [number, number] {
        const [globalX, globalY] = this.tilePixelToGlobalPixels(tileX, tileY, pixelX, pixelY, zoom);
        return this.pixelsToLatLon(globalX, globalY, zoom);
    }

    /**
     * 将全局像素坐标转换为瓦片和像素坐标
     * @param globalX 全局像素X坐标
     * @param globalY 全局像素Y坐标
     * @returns 瓦片坐标和瓦片内像素坐标
     */
    globalPixelsToTilePixel(globalX: number, globalY: number): { tileX: number, tileY: number, pixelX: number, pixelY: number } {
        const tileX = Math.floor(globalX / this.tileSize);
        const tileY = Math.floor(globalY / this.tileSize);
        const pixelX = globalX % this.tileSize;
        const pixelY = globalY % this.tileSize;
        return { tileX, tileY, pixelX, pixelY };
    }
}

/**
 * 默认坐标转换器（使用瓦片大小1000，缩放级别11，与后端RegionService保持一致）
 */
export const defaultTransformer = new CoordinateTransformer(1000);

/**
 * 简化函数：将瓦片坐标和像素坐标转换为纬度/经度（使用默认转换器）
 */
export function tilePixelToLatLon(tileX: number, tileY: number, pixelX: number, pixelY: number, zoom: number = 11): [number, number] {
    return defaultTransformer.tilePixelToLatLon(tileX, tileY, pixelX, pixelY, zoom);
}

/**
 * 简化函数：将纬度/经度转换为瓦片和像素坐标（使用默认转换器）
 */
export function latLonToTilePixel(lat: number, lon: number, zoom: number = 11): { tileX: number, tileY: number, pixelX: number, pixelY: number } {
    const [globalX, globalY] = defaultTransformer.latLonToPixels(lat, lon, zoom);
    return defaultTransformer.globalPixelsToTilePixel(globalX, globalY);
}