
const Graph = require('./index.js');
describe('Graph BFS', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('BFS returns the correct order of traversal', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'E');

    expect(graph.bfs('A')).toEqual(['A', 'B', 'C', 'D', 'E']);
    expect(graph.bfs('B')).toEqual(['B', 'A', 'D', 'C', 'E']);
  });

  test('BFS throws error if start vertex does not exist', () => {
    expect(() => {
      graph.bfs('A');
    }).toThrow('Start vertex does not exist.');
  });
});
