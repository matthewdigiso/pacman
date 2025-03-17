const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

class Boundary {
  constructor({ position, width, height }) {
    this.position = position
    this.width = width
    this.height = height
  }

  draw() {
    c.fillStyle = 'blue'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

const map = [
    ['_', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['|', '_', '_', '_', '_', '_', '_', '_', '_']
]

const boundaries = [];

map.forEach(row, i) => 
    row.forEach[(symbol, j) => {
        if (symbol !== ' ') {
            const width = 40
            const height = 40
            const x = j * width
            const y = i * height
            boundaries.push(new Boundary({ position: { x, y }, width, height }))
        }
    }]