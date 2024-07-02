
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
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight }); // For undirected graph
    }
  }

  getVertices() {
    return Object.keys(this.adjacencyList);
  }

  getNeighbors(vertex) {
    return this.adjacencyList[vertex] || [];
  }

  size() {
    return Object.keys(this.adjacencyList).length;
  }
}

