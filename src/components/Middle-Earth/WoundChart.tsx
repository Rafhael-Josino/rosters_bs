import { useState } from 'react';
import { FaRegHandPointRight, FaRegHandPointDown } from 'react-icons/fa'

export default function WoundChart() {
  const [selectedRow, setSelectedRow] = useState(11);
  const [selectedColumn, setSelectedColumn] = useState(11);
  
  const selectedCellClass = (row: number, column: number, shade: boolean): string => {
    if (row === selectedRow && column === selectedColumn) return 'result-cell';
    else if (row === selectedRow && column < selectedColumn) return 'selected-row';
    else if (column === selectedColumn && row < selectedRow) return 'selected-column';
    else if (shade) return 'shade-cell';
    return 'empty-cell';
  }

  return <div className='wound-chart'>
    Wound Chart:
    
    <div className='wound-chart-div-1'>
      <div>Toughness</div>
      
      <div className='wound-chart-div-2'>
        <FaRegHandPointDown className='wound-chart-down-hand' />
        <FaRegHandPointRight className='wound-chart-right-hand' />

        <div className='wound-chart-strength-title'>
          <div>S</div>
          <div>t</div>
          <div>r</div>
          <div>e</div>
          <div>n</div>
          <div>g</div>
          <div>t</div>
          <div>h</div>
        </div>
        <table className='wound-chart-table' style={{margin:'0'}}>
          <tr className='header-table'>
            <td className='empty-cell'></td>
            <td onClick={() => setSelectedColumn(1)}>1</td>
            <td onClick={() => setSelectedColumn(2)}>2</td>
            <td onClick={() => setSelectedColumn(3)}>3</td>
            <td onClick={() => setSelectedColumn(4)}>4</td>
            <td onClick={() => setSelectedColumn(5)}>5</td>
            <td onClick={() => setSelectedColumn(6)}>6</td>
            <td onClick={() => setSelectedColumn(7)}>7</td>
            <td onClick={() => setSelectedColumn(8)}>8</td>
            <td onClick={() => setSelectedColumn(9)}>9</td>
            <td onClick={() => setSelectedColumn(10)}>10</td>
          </tr>
          
          <tr>
            <td className='header-table' onClick={() => setSelectedRow(1)}>1</td>
            <td className={selectedCellClass(1,1,false)}>4</td>
            <td className={selectedCellClass(1,2,false)}>5</td>
            <td className={selectedCellClass(1,3,false)}>5</td>
            <td className={selectedCellClass(1,4,false)}>6</td>
            <td className={selectedCellClass(1,5,false)}>6</td>
            <td className={selectedCellClass(1,6,false)}>6/4</td>
            <td className={selectedCellClass(1,7,false)}>6/5</td>
            <td className={selectedCellClass(1,8,false)}>6/6</td>
            <td className={selectedCellClass(1,9,false)}>-</td>
            <td className={selectedCellClass(1,10,false)}>-</td>
          </tr>

          <tr>
            <td className='header-table' onClick={() => setSelectedRow(2)}>2</td>
            <td className={selectedCellClass(2,1,true)}>4</td>
            <td className={selectedCellClass(2,2,true)}>4</td>
            <td className={selectedCellClass(2,3,true)}>5</td>
            <td className={selectedCellClass(2,4,true)}>5</td>
            <td className={selectedCellClass(2,5,true)}>6</td>
            <td className={selectedCellClass(2,6,true)}>6</td>
            <td className={selectedCellClass(2,7,true)}>6/4</td>
            <td className={selectedCellClass(2,8,true)}>6/5</td>
            <td className={selectedCellClass(2,9,true)}>6/6</td>
            <td className={selectedCellClass(2,10,true)}>-</td>
          </tr>

          <tr>
            <td className='header-table' onClick={() => setSelectedRow(3)}>3</td>
            <td className={selectedCellClass(3,1,false)}>3</td>
            <td className={selectedCellClass(3,2,false)}>4</td>
            <td className={selectedCellClass(3,3,false)}>4</td>
            <td className={selectedCellClass(3,4,false)}>5</td>
            <td className={selectedCellClass(3,5,false)}>5</td>
            <td className={selectedCellClass(3,6,false)}>6</td>
            <td className={selectedCellClass(3,7,false)}>6</td>
            <td className={selectedCellClass(3,8,false)}>6/4</td>
            <td className={selectedCellClass(3,9,false)}>6/5</td>
            <td className={selectedCellClass(3,10,false)}>6/6</td>
          </tr>

          <tr>
            <td className='header-table' onClick={() => setSelectedRow(4)}>4</td>
            <td className={selectedCellClass(4,1,true)}>3</td>
            <td className={selectedCellClass(4,2,true)}>3</td>
            <td className={selectedCellClass(4,3,true)}>4</td>
            <td className={selectedCellClass(4,4,true)}>4</td>
            <td className={selectedCellClass(4,5,true)}>5</td>
            <td className={selectedCellClass(4,6,true)}>5</td>
            <td className={selectedCellClass(4,7,true)}>6</td>
            <td className={selectedCellClass(4,8,true)}>6</td>
            <td className={selectedCellClass(4,9,true)}>6/4</td>
            <td className={selectedCellClass(4,10,true)}>6/5</td>
          </tr>

          <tr>
            <td className='header-table' onClick={() => setSelectedRow(5)}>5</td>
            <td className={selectedCellClass(5,1,false)}>3</td>
            <td className={selectedCellClass(5,2,false)}>3</td>
            <td className={selectedCellClass(5,3,false)}>3</td>
            <td className={selectedCellClass(5,4,false)}>4</td>
            <td className={selectedCellClass(5,5,false)}>4</td>
            <td className={selectedCellClass(5,6,false)}>5</td>
            <td className={selectedCellClass(5,7,false)}>5</td>
            <td className={selectedCellClass(5,8,false)}>6</td>
            <td className={selectedCellClass(5,9,false)}>6</td>
            <td className={selectedCellClass(5,10,false)}>6/4</td>
          </tr>

          <tr>
            <td className='header-table' onClick={() => setSelectedRow(6)}>6</td>
            <td className={selectedCellClass(6,1,true)}>3</td>
            <td className={selectedCellClass(6,2,true)}>3</td>
            <td className={selectedCellClass(6,3,true)}>3</td>
            <td className={selectedCellClass(6,4,true)}>3</td>
            <td className={selectedCellClass(6,5,true)}>4</td>
            <td className={selectedCellClass(6,6,true)}>4</td>
            <td className={selectedCellClass(6,7,true)}>5</td>
            <td className={selectedCellClass(6,8,true)}>5</td>
            <td className={selectedCellClass(6,9,true)}>6</td>
            <td className={selectedCellClass(6,10,true)}>6</td>
          </tr>

          <tr>
            <td className='header-table' onClick={() => setSelectedRow(7)}>7</td>
            <td className={selectedCellClass(7,1,false)}>3</td>
            <td className={selectedCellClass(7,2,false)}>3</td>
            <td className={selectedCellClass(7,3,false)}>3</td>
            <td className={selectedCellClass(7,4,false)}>3</td>
            <td className={selectedCellClass(7,5,false)}>3</td>
            <td className={selectedCellClass(7,6,false)}>4</td>
            <td className={selectedCellClass(7,7,false)}>4</td>
            <td className={selectedCellClass(7,8,false)}>5</td>
            <td className={selectedCellClass(7,9,false)}>5</td>
            <td className={selectedCellClass(7,10,false)}>6</td>
          </tr>

          <tr>
            <td className='header-table' onClick={() => setSelectedRow(8)}>8</td>
            <td className={selectedCellClass(8,1,true)}>3</td>
            <td className={selectedCellClass(8,2,true)}>3</td>
            <td className={selectedCellClass(8,3,true)}>3</td>
            <td className={selectedCellClass(8,4,true)}>3</td>
            <td className={selectedCellClass(8,5,true)}>3</td>
            <td className={selectedCellClass(8,6,true)}>3</td>
            <td className={selectedCellClass(8,7,true)}>4</td>
            <td className={selectedCellClass(8,8,true)}>4</td>
            <td className={selectedCellClass(8,9,true)}>5</td>
            <td className={selectedCellClass(8,10,true)}>5</td>
          </tr>

          <tr>
            <td className='header-table' onClick={() => setSelectedRow(9)}>9</td>
            <td className={selectedCellClass(9,1,false)}>3</td>
            <td className={selectedCellClass(9,2,false)}>3</td>
            <td className={selectedCellClass(9,3,false)}>3</td>
            <td className={selectedCellClass(9,4,false)}>3</td>
            <td className={selectedCellClass(9,5,false)}>3</td>
            <td className={selectedCellClass(9,6,false)}>3</td>
            <td className={selectedCellClass(9,7,false)}>3</td>
            <td className={selectedCellClass(9,8,false)}>4</td>
            <td className={selectedCellClass(9,9,false)}>4</td>
            <td className={selectedCellClass(9,10,false)}>5</td>
          </tr>

          <tr>
            <td className='header-table' onClick={() => setSelectedRow(10)}>10</td>
            <td className={selectedCellClass(10,1,true)}>3</td>
            <td className={selectedCellClass(10,2,true)}>3</td>
            <td className={selectedCellClass(10,3,true)}>3</td>
            <td className={selectedCellClass(10,4,true)}>3</td>
            <td className={selectedCellClass(10,5,true)}>3</td>
            <td className={selectedCellClass(10,6,true)}>3</td>
            <td className={selectedCellClass(10,7,true)}>3</td>
            <td className={selectedCellClass(10,8,true)}>3</td>
            <td className={selectedCellClass(10,9,true)}>4</td>
            <td className={selectedCellClass(10,10,true)}>4</td>
          </tr>

        </table>
      </div>
    </div>
  </div> 
}