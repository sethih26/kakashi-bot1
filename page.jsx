"use client";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Twitter, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function KakashiSite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Kakashi</h1>
        <p className="text-xl text-gray-400">
          Building bots, dropping alpha, and cutting to greatness.
        </p>
      </motion.header>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">What I Do</h2>
            <ul className="list-disc ml-6 text-gray-300 space-y-1">
              <li>Crypto Alpha & Airdrop Hunter</li>
              <li>Bot Dev: Whale alerts, Thread bots, Tools</li>
              <li>Thread Writer & Twitter Growth Strategist</li>
              <li>Fitness & Notion-Based Productivity</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Services Offered</h2>
            <ul className="list-disc ml-6 text-gray-300 space-y-1">
              <li>Daily AI-Generated Crypto Threads</li>
              <li>Custom Telegram Bots (Alerts, Trackers)</li>
              <li>Twitter Strategy & Ghostwriting</li>
              <li>Personal Notion Dashboards (Fitness x Hustle)</li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="max-w-3xl mx-auto mt-16"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Client Testimonials</h2>
        <Card>
          <CardContent className="p-4 space-y-4 text-gray-300">
            <p><strong>@CTWizard:</strong> "Kakashi's AI thread bot helped us go viral 3x in a week. Insane ROI."</p>
            <p><strong>@SolanaDegen:</strong> "His whale alert bot caught a $250K buy before it pumped. 100x intel."</p>
            <p><strong>@An0nAirDrop:</strong> "From 0 to 10K followers using just his Twitter playbook and daily threads."</p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
        <div className="flex justify-center gap-6">
          <a href="https://twitter.com/kakashi" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Twitter className="w-6 h-6 text-white" />
            </Button>
          </a>
          <a href="https://t.me/kakashi_airdrops" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Send className="w-6 h-6 text-white" />
            </Button>
          </a>
        </div>
        <p className="text-gray-400 mt-4 text-sm">
          DM me for collabs, bot builds, or alpha drops.
        </p>
      </motion.section>
    </div>
  );
}
