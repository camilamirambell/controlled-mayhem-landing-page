"use client";

import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  BaseEdge,
  getSmoothStepPath,
  type Node,
  type Edge,
  type EdgeProps,
  type NodeChange,
  type EdgeChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "framer-motion";

// ─── Dashed Animated Edge (Metoro style) ──────────────────────────────────────

function DashedEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    borderRadius: 8,
  });

  return (
    <>
      {/* Glow layer */}
      <BaseEdge
        id={`${id}-glow`}
        path={edgePath}
        style={{
          stroke: "rgba(0,255,255,0.15)",
          strokeWidth: 6,
          fill: "none",
          strokeDasharray: "5,5",
        }}
      />
      {/* Main dashed animated line */}
      <BaseEdge
        id={id}
        path={edgePath}
        style={{
          stroke: "rgb(0,255,255)",
          strokeWidth: 2,
          fill: "none",
          strokeDasharray: "5,5",
          animation: "dashdraw 0.5s linear infinite",
        }}
      />
    </>
  );
}

const edgeTypes = { dashed: DashedEdge };

// ─── Custom Nodes ──────────────────────────────────────────────────────────────

const handleStyle = { background: "transparent", border: "none", width: 8, height: 8 };

function ProductNode({ data }: { data: Record<string, unknown> }) {
  return (
    <div
      style={{
        background: "rgba(10,10,10,0.95)",
        border: "1px solid rgba(0,255,255,0.2)",
        borderRadius: 10,
        padding: "12px 16px",
        width: 172,
        textAlign: "center",
        cursor: "grab",
        transition: "border-color 0.25s, box-shadow 0.25s",
        userSelect: "none",
        backdropFilter: "blur(8px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgb(0,255,255)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,255,0.2), inset 0 0 20px rgba(0,255,255,0.04)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(0,255,255,0.2)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Handle type="target" position={Position.Top}    style={handleStyle} />
      <Handle type="target" position={Position.Left}   style={handleStyle} />
      <Handle type="source" position={Position.Bottom} style={handleStyle} />
      <Handle type="source" position={Position.Right}  style={handleStyle} />
      <div style={{ fontSize: 20, marginBottom: 5 }}>{data.icon as string}</div>
      <div style={{ fontWeight: 700, color: "#fff", fontSize: 12, marginBottom: 3, letterSpacing: "0.02em" }}>
        {data.label as string}
      </div>
      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, lineHeight: 1.4 }}>
        {data.tagline as string}
      </div>
    </div>
  );
}

function CenterNode({ data }: { data: Record<string, unknown> }) {
  return (
    <div
      style={{
        background: "rgba(0,255,255,0.06)",
        border: "1.5px solid rgb(0,255,255)",
        boxShadow: "0 0 30px rgba(0,255,255,0.25), inset 0 0 30px rgba(0,255,255,0.05)",
        borderRadius: 10,
        padding: "14px 18px",
        width: 190,
        textAlign: "center",
        cursor: "grab",
        userSelect: "none",
      }}
    >
      <Handle type="source" position={Position.Top}    style={handleStyle} />
      <Handle type="source" position={Position.Right}  style={handleStyle} />
      <Handle type="source" position={Position.Bottom} style={handleStyle} />
      <Handle type="source" position={Position.Left}   style={handleStyle} />
      <div style={{ fontWeight: 800, color: "#fff", fontSize: 14, marginBottom: 3 }}>
        {data.label as string}
      </div>
      <div style={{ color: "rgba(0,255,255,0.75)", fontSize: 10, letterSpacing: "0.04em" }}>
        {data.sublabel as string}
      </div>
    </div>
  );
}

const nodeTypes = { product: ProductNode, center: CenterNode };

// ─── Initial Data ──────────────────────────────────────────────────────────────

const CX = 320;
const CY = 260;

const initialNodes: Node[] = [
  {
    id: "center",
    type: "center",
    position: { x: CX - 95, y: CY - 25 },
    data: { label: "Your Business", sublabel: "CONTROLLED MAYHEM CLIENT" },
  },
  {
    id: "kodus",
    type: "product",
    position: { x: CX - 310, y: CY - 180 },
    data: { icon: "⚖️", label: "Kodus Legal", tagline: "AI for Law · 3M+ legal docs" },
  },
  {
    id: "hecate",
    type: "product",
    position: { x: CX + 120, y: CY - 180 },
    data: { icon: "🔮", label: "Hecate", tagline: "CI/CD Intelligence" },
  },
  {
    id: "cimenta",
    type: "product",
    position: { x: CX - 310, y: CY + 130 },
    data: { icon: "🏗️", label: "Cimenta", tagline: "Construction AI" },
  },
  {
    id: "taskhive",
    type: "product",
    position: { x: CX + 120, y: CY + 130 },
    data: { icon: "🐝", label: "TaskHive", tagline: "Agent Orchestration" },
  },
  {
    id: "consulting",
    type: "product",
    position: { x: CX - 75, y: CY - 240 },
    data: { icon: "🧠", label: "CM Consulting", tagline: "AI Strategy & Implementation" },
  },
];

const e = (id: string, source: string, target: string): Edge => ({
  id,
  source,
  target,
  type: "dashed",
});

const initialEdges: Edge[] = [
  // Hub connections (center ↔ each product)
  e("e-c-kodus",      "center",     "kodus"),
  e("e-c-hecate",     "center",     "hecate"),
  e("e-c-cimenta",    "center",     "cimenta"),
  e("e-c-taskhive",   "center",     "taskhive"),
  e("e-c-consulting", "center",     "consulting"),
  // Cross connections between products (makes it look like a real diagram)
  e("e-kodus-consulting",   "kodus",     "consulting"),
  e("e-consulting-hecate",  "consulting","hecate"),
  e("e-kodus-cimenta",      "kodus",     "cimenta"),
  e("e-hecate-taskhive",    "hecate",    "taskhive"),
  e("e-cimenta-taskhive",   "cimenta",   "taskhive"),
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function EcosystemFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const onInit = useCallback(() => {}, []);

  return (
    <section style={{ background: "#0a0a0a", padding: "80px 0 60px" }}>
      {/* Inject dashdraw keyframe animation */}
      <style>{`
        @keyframes dashdraw {
          from { stroke-dashoffset: 10; }
          to   { stroke-dashoffset: 0; }
        }
        .react-flow__node { z-index: 10 !important; }
      `}</style>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <h2 style={{ fontSize: "clamp(32px,5vw,48px)", fontWeight: 800, color: "#fff", marginBottom: 12 }}>
            The Ecosystem
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 15 }}>
            AI products that work together. Drag them around.
          </p>
        </motion.div>

        {/* Canvas */}
        <div
          style={{
            height: 620,
            borderRadius: 16,
            border: "1px solid rgba(0,255,255,0.1)",
            boxShadow: "0 0 60px rgba(0,255,255,0.05)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodesChange={onNodesChange as (changes: NodeChange[]) => void}
            onEdgesChange={onEdgesChange as (changes: EdgeChange[]) => void}
            onInit={onInit}
            nodesDraggable={true}
            nodesConnectable={false}
            elementsSelectable={false}
            fitView
            fitViewOptions={{ padding: 0.25 }}
            panOnDrag={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            panOnScroll={false}
            preventScrolling={false}
            proOptions={{ hideAttribution: true }}
            style={{ background: "#0a0a0a" }}
          >
            <Background color="rgba(0,255,255,0.04)" gap={24} size={1} />
          </ReactFlow>
        </div>

        {/* Hint */}
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.18)", fontSize: 11, marginTop: 14, letterSpacing: "0.05em" }}>
          DRAG THE NODES — THEY WON&apos;T BREAK
        </p>
      </div>
    </section>
  );
}
