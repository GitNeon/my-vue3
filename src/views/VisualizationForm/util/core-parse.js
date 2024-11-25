import { utils } from 'xlsx';

// 获取某个sheet页的所有单元格数据
export function getSheetCells(worksheet) {
  if (!worksheet || !worksheet['!ref']) {
    return [];
  }

  const cellRange = utils.decode_range(worksheet['!ref']);
  const merges = worksheet['!merges'] || [];

  // 初始化一个数组来存储我们的数据
  let cellsData = [];

  // 合并映射集
  const mergeMap = {};
  merges.forEach(merge => {
    const startCell = utils.encode_cell({ r: merge.s.r, c: merge.s.c });
    const endCell = utils.encode_cell({ r: merge.e.r, c: merge.e.c });

    // 如果你想要获取合并单元格的内容（通常取左上角单元格的值）
    const startCellValue = worksheet[startCell] ? worksheet[startCell].v : '';

    // 如果你想要列出合并区域内所有单元格的引用
    const cellPath = [];
    const cellPath2 = [];
    for (let r = merge.s.r; r <= merge.e.r; r++) {
      for (let c = merge.s.c; c <= merge.e.c; c++) {
        cellPath.push(utils.encode_cell({ r, c }));
        cellPath2.push(utils.encode_cell({ r, c })[0]);
      }
    }

    mergeMap[startCellValue] = { mergeScope: `${startCell}:${endCell}`, value: startCellValue, cellPath, cellPath2 };
  });

  console.log(mergeMap);

  // 遍历单元格范围,分别遍历行和列
  for (let R = cellRange.s.r; R <= cellRange.e.r; ++R) {
    for (let C = cellRange.s.c; C <= cellRange.e.c; ++C) {
      // 获取单元格的引用（如'A1'）
      const cellAddress = utils.encode_cell({ r: R, c: C });
      // 获取单元格的值
      const cellValue = worksheet[cellAddress] ? worksheet[cellAddress].v : '';
      if (!cellValue) {
        continue;
      }
      const cellSeries = cellAddress[0];
      const headerLevel = Number(cellAddress[1]);

      // 添加到结果数组中
      cellsData.push({ cell: cellAddress, value: cellValue, headerLevel, cellSeries, merge: mergeMap[cellValue] });
    }
  }

  // 如果需要，可以返回结果
  return cellsData;
}

// 单元格转换成表头
export function transformCellsToTableHeader(cellArray) {
  if (!cellArray || !cellArray.length) {
    return [];
  }

  const result = JSON.parse(JSON.stringify(cellArray));

  const levelMap = {};

  for (let i = 0; i < result.length; i++) {
    const cell = result[i];

    if (!cell.children) {
      cell.children = [];
    }

    if (!levelMap[cell.headerLevel]) {
      levelMap[cell.headerLevel] = [];
    } else if (cell.value !== '') {
      levelMap[cell.headerLevel].push(cell);
    }
  }

  console.log(levelMap);

  return result;
}
