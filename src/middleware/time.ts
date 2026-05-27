// 接口请求计时中间件
import { Request, Response, NextFunction } from "express";

export function requestTimingMiddleware(req: Request, res: Response, next: NextFunction) {
  const startTime = Date.now();

  res.on('finish', () => {
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`请求耗时: ${duration} ms`);
  });

  return next?.();
}
