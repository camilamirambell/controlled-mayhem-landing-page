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

// ─── Dashed Animated Edge (Void Electric style) ─────────────────────────────

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
          stroke: "rgba(200,255,0,0.1)",
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
          stroke: "rgba(200,255,0,0.5)",
          strokeWidth: 1.5,
          fill: "none",
          strokeDasharray: "5,5",
          animation: "dashdraw 0.5s linear infinite",
        }}
      />
    </>
  );
}

const edgeTypes = { dashed: DashedEdge };

// ─── Custom Nodes ───────────────────────────────────────────────────────────

const handleStyle = {
  background: "transparent",
  border: "none",
  width: 8,
  height: 8,
};

function ProductNode({ data }: { data: Record<string, unknown> }) {
  return (
    <div
      style={{
        background: "rgba(17,24,39,0.95)",
        border: "1px solid rgba(200,255,0,0.15)",
        borderRadius: 0,
        padding: "18px 22px",
        width: 220,
        textAlign: "center",
        cursor: "grab",
        transition: "border-color 0.25s, box-shadow 0.25s",
        userSelect: "none",
        backdropFilter: "blur(8px)",
        fontFamily: "var(--font-syne), sans-serif",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(200,255,0,0.6)";
        e.currentTarget.style.boxShadow =
          "0 0 24px rgba(200,255,0,0.15), inset 0 0 20px rgba(200,255,0,0.03)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(200,255,0,0.15)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <Handle type="target" position={Position.Top} style={handleStyle} />
      <Handle type="target" position={Position.Left} style={handleStyle} />
      <Handle type="source" position={Position.Bottom} style={handleStyle} />
      <Handle type="source" position={Position.Right} style={handleStyle} />
      <div
        style={{
          fontWeight: 700,
          color: "#fff",
          fontSize: 16,
          marginBottom: 6,
          letterSpacing: "0.02em",
          fontFamily: "var(--font-display), Georgia, serif",
        }}
      >
        {data.label as string}
      </div>
      <div
        style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: 12,
          lineHeight: 1.5,
          fontFamily: "var(--font-dm-mono), monospace",
        }}
      >
        {data.tagline as string}
      </div>
    </div>
  );
}

function CenterNode({ data }: { data: Record<string, unknown> }) {
  return (
    <div
      style={{
        background: "rgba(200,255,0,0.06)",
        border: "1.5px solid rgba(200,255,0,0.7)",
        boxShadow:
          "0 0 30px rgba(200,255,0,0.15), inset 0 0 30px rgba(200,255,0,0.03)",
        borderRadius: 0,
        padding: "20px 24px",
        width: 240,
        textAlign: "center",
        cursor: "grab",
        userSelect: "none",
      }}
    >
      <Handle type="source" position={Position.Top} style={handleStyle} />
      <Handle type="source" position={Position.Right} style={handleStyle} />
      <Handle type="source" position={Position.Bottom} style={handleStyle} />
      <Handle type="source" position={Position.Left} style={handleStyle} />
      <div
        style={{
          fontWeight: 800,
          color: "#fff",
          fontSize: 18,
          marginBottom: 4,
          fontFamily: "var(--font-display), Georgia, serif",
          fontStyle: "italic",
        }}
      >
        {data.label as string}
      </div>
      <div
        style={{
          color: "rgba(200,255,0,0.7)",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase" as const,
          fontFamily: "var(--font-dm-mono), monospace",
        }}
      >
        {data.sublabel as string}
      </div>
    </div>
  );
}

const nodeTypes = { product: ProductNode, center: CenterNode };

// ─── Initial Data ───────────────────────────────────────────────────────────

const CX = 340;
const CY = 260;

const initialNodes: Node[] = [
  {
    id: "center",
    type: "center",
    position: { x: CX - 100, y: CY - 25 },
    data: { label: "Controlled Mayhem", sublabel: "AI Product Studio" },
  },
  {
    id: "delegate",
    type: "product",
    position: { x: CX - 320, y: CY - 190 },
    data: { label: "Delegate", tagline: "MCP proxy · 33+ APIs · 88% fewer tokens" },
  },
  {
    id: "taskhive",
    type: "product",
    position: { x: CX + 140, y: CY - 190 },
    data: { label: "TaskHive", tagline: "Kanban for humans + agents" },
  },
  {
    id: "hecate",
    type: "product",
    position: { x: CX - 320, y: CY + 140 },
    data: { label: "Hecate", tagline: "Zero-knowledge .env secrets" },
  },
  {
    id: "megabrain",
    type: "product",
    position: { x: CX + 140, y: CY + 140 },
    data: { label: "MegaBrain", tagline: "Semantic memory for agents" },
  },
  {
    id: "kodus",
    type: "product",
    position: { x: CX - 85, y: CY - 260 },
    data: { label: "Kodus Legal", tagline: "3M+ legal docs · semantic search" },
  },
  {
    id: "cimenta",
    type: "product",
    position: { x: CX - 85, y: CY + 220 },
    data: { label: "Cimenta", tagline: "Blueprint → BOM with AI" },
  },
];

const e = (id: string, source: string, target: string): Edge => ({
  id,
  source,
  target,
  type: "dashed",
});

const initialEdges: Edge[] = [
  // Hub connections
  e("e-c-delegate", "center", "delegate"),
  e("e-c-taskhive", "center", "taskhive"),
  e("e-c-hecate", "center", "hecate"),
  e("e-c-megabrain", "center", "megabrain"),
  e("e-c-kodus", "center", "kodus"),
  e("e-c-cimenta", "center", "cimenta"),
  // Cross connections
  e("e-delegate-taskhive", "delegate", "taskhive"),
  e("e-delegate-kodus", "delegate", "kodus"),
  e("e-taskhive-megabrain", "taskhive", "megabrain"),
  e("e-hecate-cimenta", "hecate", "cimenta"),
  e("e-kodus-taskhive", "kodus", "taskhive"),
];

// ─── Component ──────────────────────────────────────────────────────────────

export default function EcosystemFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const onInit = useCallback(() => {}, []);

  return (
    <section className="bg-background" style={{ padding: "80px 0 60px" }}>
      {/* Inject dashdraw keyframe animation */}
      <style>{`
        @keyframes dashdraw {
          from { stroke-dashoffset: 10; }
          to   { stroke-dashoffset: 0; }
        }
        .react-flow__node { z-index: 10 !important; }
      `}</style>

      {/* Title */}
      <div className="mx-auto max-w-6xl px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#C8FF00]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">
              The ecosystem
            </span>
          </div>
          <h2
            className="text-3xl tracking-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Everything <span className="italic">connects.</span>
          </h2>
          <p className="mt-3 text-sm text-white/50">
            Drag the nodes around. This is how our tools work together.
          </p>
        </motion.div>
      </div>

      {/* Canvas — full width */}
      <div
        style={{
          width: "100%",
          height: 700,
          borderTop: "1px solid rgba(200,255,0,0.08)",
          borderBottom: "1px solid rgba(200,255,0,0.08)",
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
          fitViewOptions={{ padding: 0.35 }}
          panOnDrag={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          panOnScroll={false}
          preventScrolling={false}
          proOptions={{ hideAttribution: true }}
          style={{ background: "var(--background)" }}
        >
          <Background color="rgba(200,255,0,0.03)" gap={24} size={1} />
        </ReactFlow>
      </div>

      {/* Hint */}
      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-white/25">
        Drag the nodes — they won&apos;t break
      </p>
    </section>
  );
}
