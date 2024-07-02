
const Graph = require('./index.js');
describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('vertex can be successfully added to the graph', () => {
    expect(graph.addVertex('A')).toBe('A');
    expect(graph.getVertices()).toContain('A');
  });

  test('an edge can be successfully added to the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B', 5);
    expect(graph.getNeighbors('A')).toEqual([{ node: 'B', weight: 5 }]);
    expect(graph.getNeighbors('B')).toEqual([{ node: 'A', weight: 5 }]);
  });

  test('a collection of all vertices can be properly retrieved from the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.getVertices()).toEqual(['A', 'B']);
  });

  test('all appropriate neighbors can be retrieved from the graph', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B', 5);
    graph.addEdge('A', 'C', 10);
    expect(graph.getNeighbors('A')).toEqual([
      { node: 'B', weight: 5 },
      { node: 'C', weight: 10 },
    ]);
  });

  test('neighbors are returned with the weight between vertices included', () => {
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addEdge('A', 'B', 5);
    expect(graph.getNeighbors('A')).toEqual([{ node: 'B', weight: 5 }]);
  });

  test('the proper size is returned, representing the number of vertices in the graph', () => {
    expect(graph.size()).toBe(0);
    graph.addVertex('A');
    graph.addVertex('B');
    expect(graph.size()).toBe(2);
  });

  test('a graph with only one vertex and edge can be properly returned', () => {
    graph.addVertex('X');
    expect(graph.size()).toBe(1);
    graph.addVertex('Y');
    graph.addEdge('X', 'Y', 10);
    expect(graph.getNeighbors('X')).toEqual([{ node: 'Y', weight: 10 }]);
    expect(graph.getNeighbors('Y')).toEqual([{ node: 'X', weight: 10 }]);
  });

  test('error is thrown if adding an edge with non-existent vertices', () => {
    graph.addVertex('A');
    expect(() => {
      graph.addEdge('A', 'B', 5);
    }).toThrow('Both vertices must be added to the graph before adding an edge.');
  });

  test('error is thrown if getting neighbors of a non-existent vertex', () => {
    expect(() => {
      graph.getNeighbors('A');
    }).toThrow('Vertex does not exist.');
  });
});
