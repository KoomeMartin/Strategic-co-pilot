"use client";

import { useCallback, useState } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { scheme, setScheme } = useColorScheme();
  const [showChat, setShowChat] = useState(false);

  const openChat = useCallback(() => setShowChat(true), []);
  const closeChat = useCallback(() => setShowChat(false), []);

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  return (
    <main className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">GTM Intelligence Cockpit</h1>
          <p className="text-lg text-gray-600">
            Your central hub for building and launching intelligent, buyer-based marketing campaigns.
          </p>
        </div>

        <div className="mb-12">
          <div className="tile copilot-tile rounded-lg border border-slate-700 shadow-xl p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="tile-icon w-20 h-20 rounded-full flex items-center justify-center mr-0 md:mr-8 mb-4 md:mb-0 flex-shrink-0">
                <i className="fas fa-user-astronaut fa-2x" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Strategic Co-Pilot (RAG Agent)</h3>
                <p className="text-slate-300 mb-4">
                  Your conversational AI partner. Ask ad-hoc questions, draft sales emails, or generate social posts, all powered by your
                  company's unique knowledgebase of frameworks, brand guidelines, and buyer insights.
                </p>
                <button onClick={openChat} className="btn-primary font-bold py-2 px-6 rounded-md text-lg">
                  <i className="fas fa-comments mr-2" />
                  Open Chat
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl section-title mb-6">Standard Digital Campaigns</h2>
            <div className="space-y-8">
              <div className="tile bg-white rounded-lg border border-gray-200 shadow-md p-6">
                <div className="tile-content">
                  <div className="flex items-center mb-4">
                    <div className="tile-icon w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-chess-knight fa-lg" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Campaign Strategy Agent</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Define the foundational GTM strategy for your campaign, including target personas, buying motions, and core messaging.
                  </p>
                </div>
                <button onClick={openChat} className="btn-primary text-white font-bold py-2 px-4 rounded-md mt-auto w-full">
                  <i className="fas fa-arrow-right mr-2" />
                  Define Strategy
                </button>
              </div>

              <div className="tile bg-white rounded-lg border border-gray-200 shadow-md p-6">
                <div className="tile-content">
                  <div className="flex items-center mb-4">
                    <div className="tile-icon w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-file-alt fa-lg" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Campaign Research Agent</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Generate in-depth market research reports on industries, competitors, or technology trends to inform your campaign.
                  </p>
                </div>
                <button onClick={openChat} className="btn-primary text-white font-bold py-2 px-4 rounded-md mt-auto w-full">
                  <i className="fas fa-arrow-right mr-2" />
                  Launch Research
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl section-title mb-6">Account-Based Marketing (ABM)</h2>
            <div className="space-y-8">
              <div className="tile bg-white rounded-lg border border-gray-200 shadow-md p-6">
                <div className="tile-content">
                  <div className="flex items-center mb-4">
                    <div className="tile-icon w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-bullseye fa-lg" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">ABM Opportunity Report</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Generate on-demand intelligence briefs for any target account, empowering Sales with the insights they need to win.
                  </p>
                </div>
                <button onClick={openChat} className="btn-primary text-white font-bold py-2 px-4 rounded-md mt-auto w-full">
                  <i className="fas fa-arrow-right mr-2" />
                  Generate Report
                </button>
              </div>

              <div className="tile bg-white rounded-lg border border-gray-200 shadow-md p-6">
                <div className="tile-content">
                  <div className="flex items-center mb-4">
                    <div className="tile-icon w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-search-dollar fa-lg" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">ABM Opportunity Research</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Conduct deep research on a list of target accounts to uncover buying triggers, key stakeholders, and strategic entry points.
                  </p>
                </div>
                <button onClick={openChat} className="btn-primary text-white font-bold py-2 px-4 rounded-md mt-auto w-full">
                  <i className="fas fa-arrow-right mr-2" />
                  Research Accounts
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="tile bg-white rounded-lg border border-gray-200 shadow-md p-8 text-center">
            <div className="tile-icon w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-magic-wand-sparkles fa-2x" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Universal Asset Generation</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              A universal tool that works for any campaign. Dynamically create on-brand assets like email sequences, ad copy, and social posts.
            </p>
            <button onClick={openChat} className="btn-primary text-white font-bold py-3 px-8 rounded-md text-lg">
              <i className="fas fa-arrow-right mr-2" />
              Create New Assets
            </button>
          </div>

          <div className="tile bg-white rounded-lg border border-gray-200 shadow-md p-8 text-center">
            <div className="tile-icon w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-cogs fa-2x" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dynamic Value Proposition</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Craft hyper-specific messaging by combining filters like industry, buying center, and geographic location.
            </p>
            <button onClick={openChat} className="btn-primary text-white font-bold py-3 px-8 rounded-md text-lg">
              <i className="fas fa-arrow-right mr-2" />
              Generate Value Prop
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl section-title mb-6">Advanced Intelligence Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="tile bg-white rounded-lg border border-gray-200 shadow-md p-6">
              <div className="tile-content">
                <div className="flex items-center mb-4">
                  <div className="tile-icon w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-brain fa-lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Buyer Insight &amp; Mental Models</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Go beyond personas. Uncover the deep-seated mindset and motivations of your target buyers.
                </p>
              </div>
              <button onClick={openChat} className="btn-primary text-white font-bold py-2 px-4 rounded-md mt-auto w-full">
                <i className="fas fa-arrow-right mr-2" />
                Analyze Buyers
              </button>
            </div>

            <div className="tile bg-white rounded-lg border border-gray-200 shadow-md p-6">
              <div className="tile-content">
                <div className="flex items-center mb-4">
                  <div className="tile-icon w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-binoculars fa-lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Competitive GTM Analysis</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Analyze your competitor's entire Go-to-Market strategy to identify their messaging and content funnels.
                </p>
              </div>
              <button onClick={openChat} className="btn-primary text-white font-bold py-2 px-4 rounded-md mt-auto w-full">
                <i className="fas fa-arrow-right mr-2" />
                Analyze Competitors
              </button>
            </div>

            <div className="tile bg-white rounded-lg border border-gray-200 shadow-md p-6">
              <div className="tile-content">
                <div className="flex items-center mb-4">
                  <div className="tile-icon w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-satellite-dish fa-lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Sales Signal Monitoring</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Monitor target accounts for real-time buying signals and automatically trigger alerts for your sales team.
                </p>
              </div>
              <button onClick={openChat} className="btn-primary text-white font-bold py-2 px-4 rounded-md mt-auto w-full">
                <i className="fas fa-arrow-right mr-2" />
                Configure Signals
              </button>
            </div>

            <div className="tile bg-white rounded-lg border border-gray-200 shadow-md p-6">
              <div className="tile-content">
                <div className="flex items-center mb-4">
                  <div className="tile-icon w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-lightbulb fa-lg" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Content Strategy &amp; Gap Analysis</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Audit your content library against your buyer's journey and generate a prioritized plan to fill the gaps.
                </p>
              </div>
              <button onClick={openChat} className="btn-primary text-white font-bold py-2 px-4 rounded-md mt-auto w-full">
                <i className="fas fa-arrow-right mr-2" />
                Analyze Content
              </button>
            </div>
          </div>
        </div>
      </div>

      {showChat ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-6xl">
            <button
              aria-label="Close chat"
              className="absolute -top-3 -right-3 rounded-full bg-white shadow p-2 text-slate-700 hover:bg-slate-100"
              onClick={closeChat}
            >
              <i className="fas fa-times" />
            </button>
            <ChatKitPanel
              theme={scheme}
              onWidgetAction={handleWidgetAction}
              onResponseEnd={handleResponseEnd}
              onThemeRequest={setScheme}
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}
