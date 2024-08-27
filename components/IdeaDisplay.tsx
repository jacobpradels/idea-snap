"use client"
import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Controls,
  Background
} from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
import TestNode from './Nodes/TestNode';
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' }, type: 'test' },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
const nodeTypes = {
  test: TestNode,
};
 
const IdeaDisplay = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <div className="w-full h-full bg-base-100">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        proOptions={{hideAttribution: true}}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default IdeaDisplay;
