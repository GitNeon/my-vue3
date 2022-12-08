/**
 * @Author: fanx
 * @Date: 2022年12月08日 16:41
 * @Description: file content
 */
export const fitChartSize = (size: any, defaultWidth = 1920) => {
  let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (!clientWidth) return size;
  let scale: any = clientWidth / defaultWidth;
  return Number((size * scale).toFixed(3));
};
