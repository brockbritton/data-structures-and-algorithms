
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(value) {
    if (!this.adjacencyList[value]) {
      this.adjacencyList[value] = [];
    }
    return value;
  }

  addEdge(vertex1, vertex2, weight = 0) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      throw new Error('Both vertices must be added to the graph before adding an edge.');
    }
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight }); // For undirected graph
  }

  getVertices() {
    return Object.keys(this.adjacencyList);
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList[vertex]) {
      throw new Error('Vertex does not exist.');
    }
    return this.adjacencyList[vertex];
  }

  size() {
    return Object.keys(this.adjacencyList).length;
  }

  bfs(start) {
    if (!this.adjacencyList[start]) {
      throw new Error('Start vertex does not exist.');
    }

    const queue = [start];
    const result = [];
    const visited = new Set();

    visited.add(start);

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach(neighbor => {
        if (!visited.has(neighbor.node)) {
          visited.add(neighbor.node);
          queue.push(neighbor.node);
        }
      });
    }

    return result;
  }
}

module.exports = Graph;
