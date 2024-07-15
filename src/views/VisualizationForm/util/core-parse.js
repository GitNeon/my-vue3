import { utils } from 'xlsx';

// 获取某个sheet页的所有单元格数据
export function getSheetCells(sheet) {
  if (!sheet || !sheet['!ref']) {
    return [];
  }

  const range = utils.decode_range(sheet['!ref']);

  let allCells = [];
  for (let rowIndex = range.s.r; rowIndex <= range.e.r; ++rowIndex) {
    let newRow = [];
    let prevContent = '';
    for (let colIndex = range.s.c; colIndex <= range.e.c; ++colIndex) {
      const encodeItem = utils.encode_cell({
        c: colIndex,
        r: rowIndex
      });
      const cell = sheet[encodeItem];
      let cellContent = '';
      if (cell && cell.t) {
        cellContent = utils.format_cell(cell);
        prevContent = cellContent;
      }
      // else {
      //   cellContent = prevContent;
      // }

      // if (!cellContent) {
      //   cellContent = allCells[0][colIndex];
      // }

      newRow.push(cellContent);
    }

    allCells.push(newRow);
  }
  return allCells;
}

export function transformCellsToTreeData(allCells) {}
