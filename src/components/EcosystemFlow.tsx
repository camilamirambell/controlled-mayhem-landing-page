"use client";

import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeChange,
  type EdgeChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { motion } from "framer-motion";

// ─── Custom Nodes ──────────────────────────────────────────────────────────────

function ProductNode({ data }: { data: Record<string, unknown> }) {
  const icon = data.icon as string;
  const label = data.label as string;
  const tagline = data.tagline as string;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        padding: "14px 16px",
        width: 180,
        textAlign: "center",
        cursor: "grab",
        transition: "border-color 0.3s, box-shadow 0.3s",
        userSelect: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#06b6d4";
        e.currentTarget.style.boxShadow = "0 0 18px rgba(6,182,212,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: 22, marginBottom: 6 }}>{icon}</div>
      <div style={{ fontWeight: 700, color: "#fff", fontSize: 13, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, lineHeight: 1.4 }}>
        {tagline}
      </div>
    </div>
  );
}

function CenterNode({ data }: { data: Record<string, unknown> }) {
  const label = data.label as string;
  const sublabel = data.sublabel as string;

  return (
    <div
      style={{
        background: "rgba(6,182,212,0.07)",
        border: "1.5px solid #06b6d4",
        boxShadow: "0 0 24px rgba(6,182,212,0.3)",
        borderRadius: 12,
        padding: "16px 20px",
        width: 200,
        textAlign: "center",
        cursor: "grab",
        userSelect: "none",
      }}
    >
      <div style={{ fontWeight: 800, color: "#fff", fontSize: 15, marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ color: "rgba(6,182,212,0.8)", fontSize: 11 }}>{sublabel}</div>
    </div>
  );
}

const nodeTypes = { product: ProductNode, center: CenterNode };

// ─── Initial Data ──────────────────────────────────────────────────────────────

const CX = 310;
const CY = 280;

const initialNodes: Node[] = [
  {
    id: "center",
    type: "center",
    position: { x: CX - 100, y: CY - 30 },
    data: { label: "Your Business", sublabel: "The center of the ecosystem" },
  },
  {
    id: "kodus",
    type: "product",
    position: { x: CX - 290, y: CY - 190 },
    data: { icon: "⚖️", label: "Kodus Legal", tagline: "AI for Law · 3M+ legal docs" },
  },
  {
    id: "hecate",
    type: "product",
    position: { x: CX + 110, y: CY - 190 },
    data: { icon: "🔮", label: "Hecate", tagline: "CI/CD Intelligence · Your pipeline, smarter" },
  },
  {
    id: "cimenta",
    type: "product",
    position: { x: CX - 290, y: CY + 130 },
    data: { icon: "🏗️", label: "Cimenta", tagline: "Construction AI · Blueprints to budgets" },
  },
  {
    id: "taskhive",
    type: "product",
    position: { x: CX + 110, y: CY + 130 },
    data: { icon: "🐝", label: "TaskHive", tagline: "Agent Orchestration · Agents that execute" },
  },
  {
    id: "consulting",
    type: "product",
    position: { x: CX - 80, y: CY - 250 },
    data: { icon: "🧠", label: "CM Consulting", tagline: "AI Strategy · We implement, not advise" },
  },
];

const edgeStyle = { stroke: "#06b6d4", strokeWidth: 1.5, opacity: 0.55 };

const initialEdges: Edge[] = [
  { id: "e1", source: "center", target: "kodus",      type: "smoothstep", animated: true, style: edgeStyle },
  { id: "e2", source: "center", target: "hecate",     type: "smoothstep", animated: true, style: edgeStyle },
  { id: "e3", source: "center", target: "cimenta",    type: "smoothstep", animated: true, style: edgeStyle },
  { id: "e4", source: "center", target: "taskhive",   type: "smoothstep", animated: true, style: edgeStyle },
  { id: "e5", source: "center", target: "consulting", type: "smoothstep", animated: true, style: edgeStyle },
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function EcosystemFlow() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const onInit = useCallback(() => {}, []);

  return (
    <section
      style={{
        background: "#0a0a0a",
        padding: "80px 0 60px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 12,
            }}
          >
            The Ecosystem
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16 }}>
            AI products that work together. Drag them around.
          </p>
        </motion.div>

        {/* Canvas */}
        <div
          style={{
            height: 620,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 0 60px rgba(6,182,212,0.06)",
            overflow: "hidden",
          }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange as (changes: NodeChange[]) => void}
            onEdgesChange={onEdgesChange as (changes: EdgeChange[]) => void}
            onInit={onInit}
            nodesDraggable={true}
            nodesConnectable={false}
            elementsSelectable={false}
            fitView={true}
            fitViewOptions={{ padding: 0.3 }}
            // Disable canvas pan/zoom so only nodes move individually
            panOnDrag={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            panOnScroll={false}
            preventScrolling={false}
            proOptions={{ hideAttribution: true }}
            style={{ background: "#0a0a0a" }}
          >
            <Background color="rgba(255,255,255,0.04)" gap={24} size={1} />
          </ReactFlow>
        </div>

        {/* Hint */}
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.2)",
            fontSize: 12,
            marginTop: 16,
            letterSpacing: "0.02em",
          }}
        >
          Drag the nodes. They won&apos;t break.
        </p>
      </div>
    </section>
  );
}
