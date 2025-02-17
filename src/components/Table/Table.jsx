'use client';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled components
const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const TableHeader = styled.thead`
  background-color: #f8f9fa;
  border-bottom: 2px solid #e9ecef;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  &:hover {
    background-color: #f1f3f5;
  }
`;

const TableHeaderCell = styled.th`
  padding: 0.5rem;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #495057;
  border-top: 1px solid #dee2e6;
`;

const TableCell = styled.td`
  padding: 0.5rem;
  color: #212529;
  font-size: 14px;
  border-top: 1px solid #dee2e6;
  transition: background-color 0.2s ease;
`;

// Generic Table component
const Table = ({ header = [], tdData = [] }) => (
  <TableContainer>
    <StyledTable>
      {/* Render header if it exists */}
      {header.length > 0 && (
        <TableHeader>
          <TableRow>
            {header.map((item, index) => (
              <TableHeaderCell key={index} scope="col">
                {item.name}
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
      )}
      <tbody>
        {/* Render rows dynamically */}
        {tdData.length > 0 ? (
          tdData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          // Fallback if no data
          <TableRow>
            <TableCell colSpan={header.length || 1} style={{ textAlign: 'center' }}>
              No data available
            </TableCell>
          </TableRow>
        )}
      </tbody>
    </StyledTable>
  </TableContainer>
);

Table.propTypes = {
  header: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
  tdData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
};

export default Table;
