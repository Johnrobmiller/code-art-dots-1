import _ from 'lodash'
import calculateDots from './calculateDots';
import drawDots from './drawDots';
import update from './update';

export default function renderDots() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
  if (!canvas) {
    throw Error ('Canvas not found')
  }
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    throw Error ('Canvas context not found')
  }
  
  const makeNewDots = (timestamp: number) => {
    drawDots(ctx, canvas)
    calculateDots(timestamp)
  }

  update(makeNewDots)
}