import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Check, Users, Eye } from "lucide-react";
import { useState } from "react";
import { TopNavigation } from "@/components/homepage/TopNavigation";
import { FooterSection } from "@/components/homepage/FooterSection";
import { SEEKSY_COLLECTIONS, type SeeksyCollection } from "@/components/modules/collectionData";
import { SEEKSY_MODULES, type SeeksyModule } from "@/components/modules/moduleData";

// Hero images
import heroStudio from "@/assets/app-hero-studio.jpg";
import heroClips from "@/assets/app-hero-clips.jpg";
import heroMarketing from "@/assets/app-hero-marketing.jpg";
import heroEvents from "@/assets/app-hero-events.jpg";
import heroCrm from "@/assets/app-hero-crm.jpg";
import heroAnalytics from "@/assets/app-hero-analytics.jpg";
import heroAi from "@/assets/app-hero-ai.jpg";
import heroIdentity from "@/assets/app-hero-identity.jpg";
import heroVideo from "@/assets/app-hero-video.jpg";
import heroEmail from "@/assets/app-hero-email.jpg";

const CATEGORY_HERO_MAP: Record<string, string> = {
  "creator-studio": heroStudio,
  "podcasting": heroStudio,
  "campaigns": heroMarketing,
  "events": heroEvents,
  "crm-business": heroCrm,
  "analytics": heroAnalytics,
  "identity": heroIdentity,
  "ai-tools": heroAi,
  "content": heroEmail,
};

const MODULE_HERO_MAP: Record<string, string> = {
  "studio": heroStudio,
  "ai-clips": heroClips,
  "ai-post-production": heroStudio,
  "media-library": heroVideo,
  "video-editor": heroVideo,
  "cloning": heroAi,
  "podcasts": heroStudio,
  "campaigns": heroMarketing,
  "email": heroEmail,
  "newsletter": heroEmail,
  "sms": heroMarketing,
  "automations": heroMarketing,
  "events": heroEvents,
  "meetings": heroEvents,
  "forms": heroCrm,
  "polls": heroAnalytics,
  "awards": heroEvents,
  "crm": heroCrm,
  "contacts": heroCrm,
  "project-management": heroCrm,
  "tasks": heroCrm,
  "proposals": heroCrm,
  "deals": heroCrm,
  "my-page": heroIdentity,
  "identity-verification": heroIdentity,
  "broadcast-monitoring": heroIdentity,
  "blog": heroEmail,
  "spark-ai": heroAi,
  "ai-automation": heroAi,
  "ai-agent": heroAi,
  "social-analytics": heroAnalytics,
  "audience-insights": heroAnalytics,
  "social-connect": heroAnalytics,
  "segments": heroMarketing,
  "email-signatures": heroEmail,
};

function BundleCard({ collection }: { collection: SeeksyCollection }) {
  const Icon = collection.icon;
  const includedModules = SEEKSY_MODULES.filter(m =>
    collection.includedApps.includes(m.id)
  );
  const displayModules = includedModules.slice(0, 4);
  const remainingCount = includedModules.length - displayModules.length;

  return (
    <Card className="group relative overflow-hidden hover:shadow-lg transition-shadow border border-border/60">
      <CardContent className="p-5 space-y-3">
        <div className="flex items-start justify-between">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: collection.color + "20" }}
          >
            <Icon className="h-6 w-6" style={{ color: collection.color }} />
          </div>
          {collection.isPopular && (
            <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 text-[10px] border-0">
              ✨ Popular
            </Badge>
          )}
        </div>

        <div>
          <h3 className="font-bold text-foreground">{collection.name}</h3>
          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
            {collection.description}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          {displayModules.map((mod) => {
            const ModIcon = mod.icon;
            return (
              <div
                key={mod.id}
                className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{ backgroundColor: collection.color + "15" }}
                title={mod.name}
              >
                <ModIcon className="h-3.5 w-3.5" style={{ color: collection.color }} />
              </div>
            );
          })}
          {remainingCount > 0 && (
            <span className="text-xs text-muted-foreground ml-1">+{remainingCount}</span>
          )}
          <span className="text-xs text-muted-foreground ml-1">
            {includedModules.length} modules
          </span>
        </div>

        <div className="flex items-center justify-between pt-1">
          {collection.usersCount && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3.5 w-3.5" />
              {collection.usersCount.toLocaleString()} users
            </div>
          )}
          <Button size="sm" className="gap-1.5 text-xs rounded-full">
            <Eye className="h-3.5 w-3.5" />
            View & Install
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function AppCard({ module }: { module: SeeksyModule }) {
  const [copied, setCopied] = useState(false);
  const Icon = module.icon;
  const heroImage = MODULE_HERO_MAP[module.id] || CATEGORY_HERO_MAP[module.category] || heroStudio;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${module.name}: ${module.description}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="group relative overflow-hidden hover:shadow-lg transition-shadow border border-border/60">
      <div className="relative h-32 overflow-hidden">
        <img
          src={heroImage}
          alt={module.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          {module.isNew && (
            <Badge className="bg-primary text-primary-foreground text-[10px] px-1.5 py-0.5">New</Badge>
          )}
          {module.isAIPowered && (
            <Badge className="bg-accent text-accent-foreground text-[10px] px-1.5 py-0.5">✨ AI</Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{
                backgroundColor: module.iconColor
                  ? undefined
                  : "hsl(var(--primary) / 0.1)",
              }}
              // Use iconBg/iconColor classes if available
            >
              <Icon className={`h-4.5 w-4.5 ${module.iconColor || "text-primary"}`} />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-sm text-foreground leading-tight truncate">
                {module.name}
              </h3>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0" onClick={handleCopy}>
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {module.description}
        </p>
      </CardContent>
    </Card>
  );
}

export default function SeeksyAppDirectory() {
  const [tab, setTab] = useState<"bundles" | "apps">("bundles");
  const [copiedAll, setCopiedAll] = useState(false);

  const copyAll = () => {
    const text =
      tab === "apps"
        ? SEEKSY_MODULES.map((m) => `## ${m.name}\n${m.description}`).join("\n\n---\n\n")
        : SEEKSY_COLLECTIONS.map(
            (c) =>
              `## ${c.name}\n${c.description}\n\nIncludes: ${c.includedApps.join(", ")}`
          ).join("\n\n---\n\n");
    navigator.clipboard.writeText(text);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNavigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Seeksy App Directory</h1>
            <p className="text-muted-foreground mt-1">
              {tab === "bundles"
                ? `${SEEKSY_COLLECTIONS.length} curated bundles for every workflow.`
                : `All ${SEEKSY_MODULES.length} individual Seeksy modules.`}
            </p>
          </div>
          <Button onClick={copyAll} variant="outline" className="gap-2 shrink-0">
            {copiedAll ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copiedAll ? "Copied!" : "Copy All"}
          </Button>
        </div>

        {/* Pill Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setTab("bundles")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === "bundles"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Bundles
          </button>
          <button
            onClick={() => setTab("apps")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === "apps"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Apps
          </button>
        </div>

        {tab === "bundles" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SEEKSY_COLLECTIONS.map((collection) => (
              <BundleCard key={collection.id} collection={collection} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SEEKSY_MODULES.map((module) => (
              <AppCard key={module.id} module={module} />
            ))}
          </div>
        )}
      </main>
      <FooterSection />
    </div>
  );
}
