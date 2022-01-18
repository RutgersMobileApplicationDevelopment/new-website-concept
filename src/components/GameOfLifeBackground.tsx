import React, { useRef } from "react";
import { useOnScreen } from "../hooks"

const RESOLUTION = 8;

export const GameOfLifeBackground = ({ interval = 1000, color = "black" }) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const isVisible = useOnScreen(ref)

  const buildGrid = React.useCallback((colsNum, rowsNum) => {
    return new Array(colsNum)
      .fill(null)
      .map(() =>
        new Array(rowsNum).fill(null).map(() => Math.floor(Math.random() * 2))
      );
  }, []);

  const nextCell = React.useCallback((cell, numNeighbours) => {
    const isDeadlyNeighbours = numNeighbours < 2 || numNeighbours > 3;

    if (cell === 1 && isDeadlyNeighbours) {
      return 0;
    }
    if (cell === 0 && numNeighbours === 3) {
      return 1;
    }

    return cell;
  }, []);

  const makeNextGen = React.useCallback(
    (grid: number[][], cols: number, rows: number) => {
      const nextGen = grid.map((arr) => [...arr]);

      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];
          let numNeighbours = 0;

          for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
              if (x === 0 && y === 0) {
                continue;
              }

              const xCell = col + x;
              const yCell = row + y;
              const isWithinBoundaries =
                xCell >= 0 && yCell >= 0 && xCell < cols && yCell < rows;

              if (isWithinBoundaries) {
                const currentNeighbour = grid[col + x][row + y];

                numNeighbours += currentNeighbour;
              }
            }
          }

          nextGen[col][row] = nextCell(cell, numNeighbours);
        }
      }

      return nextGen;
    },
    [nextCell]
  );

  const render = React.useCallback(
    (ctx, grid) => {
      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];

          ctx.beginPath();
          ctx.rect(col * RESOLUTION, row * RESOLUTION, RESOLUTION, RESOLUTION);
          ctx.fillStyle = cell ? color : "#FFF";
          ctx.fill();
        }
      }
    },
    [color]
  );

  React.useEffect(() => {
    const canvas = ref.current;

    if (canvas && isVisible) {
      let stopped = false;

      const ctx = canvas.getContext("2d");
      const { screen } = window;

      canvas.width = screen.width;
      canvas.height = screen.height;

      const COLS_NUM = Math.round(canvas.width / RESOLUTION);
      const ROWS_NUM = Math.round(canvas.height / RESOLUTION);

      let grid = buildGrid(COLS_NUM, ROWS_NUM);

      const id = window.setInterval(() => {
        grid = makeNextGen(grid, COLS_NUM, ROWS_NUM);
        render(ctx, grid);
      }, 100);

      return () => {
        window.clearInterval(id)
        stopped = true;
      };
    }
  }, [buildGrid, interval, makeNextGen, render, isVisible]);

  return (
    <canvas
      style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        zIndex: -1,
      }}
      ref={ref}
    />
  );
};
