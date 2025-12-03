import React, {useEffect, useMemo, useState} from "react";

const PALETTE = {
  operational: {
    ring: "from-emerald-400/60 via-emerald-300/30 to-transparent",
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    chip: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30"
  },
  degraded: {
    ring: "from-amber-300/60 via-amber-200/30 to-transparent",
    dot: "bg-amber-300",
    text: "text-amber-300",
    chip: "bg-amber-400/15 text-amber-200 border-amber-300/30"
  },
  partial_outage: {
    ring: "from-orange-400/60 via-orange-300/30 to-transparent",
    dot: "bg-orange-400",
    text: "text-orange-300",
    chip: "bg-orange-500/15 text-orange-300 border-orange-400/30"
  },
  major_outage: {
    ring: "from-rose-500/60 via-rose-400/30 to-transparent",
    dot: "bg-rose-500",
    text: "text-rose-400",
    chip: "bg-rose-500/15 text-rose-300 border-rose-400/30"
  },
  maintenance: {
    ring: "from-sky-400/60 via-sky-300/30 to-transparent",
    dot: "bg-sky-400",
    text: "text-sky-300",
    chip: "bg-sky-500/15 text-sky-300 border-sky-400/30"
  }
};

const STATUS_LABEL = {
  operational: "Operational",
  degraded: "Degraded Performance",
  partial_outage: "Partial Outage",
  major_outage: "Major Outage",
  maintenance: "Maintenance"
};

function classNames(...xs){
  return xs.filter(Boolean).join(" ");
}

function useInterval(cb, ms){
  useEffect(()=>{
    const id = setInterval(cb, ms);
    return ()=> clearInterval(id);
  }, [cb, ms]);
}

function formatRange(start, end){
  const fmt = new Intl.DateTimeFormat(undefined, {dateStyle: "medium", timeStyle: "short"});
  if (!start && !end) return "";
  if (start && !end) return `${fmt.format(new Date(start))} — ongoing`;
  if (!start && end) return `${fmt.format(new Date(end))}`;
  return `${fmt.format(new Date(start))} — ${fmt.format(new Date(end))}`;
}

function Progress({value=0}){
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
      <div className="h-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-200" style={{width: `${v}%`}}/>
    </div>
  );
}

function Dot({tone}){
  const t = PALETTE[tone] || PALETTE.operational;
  return (
    <span className="relative inline-flex items-center">
      <span className={classNames("inline-block w-2.5 h-2.5 rounded-full", t.dot)} />
      <span className={classNames("absolute inline-flex w-6 h-6 rounded-full blur-md opacity-40 animate-ping", t.dot)} />
    </span>
  );
}

function Chip({tone, children}){
  const t = PALETTE[tone] || PALETTE.operational;
  return (
    <span className={classNames("inline-flex items-center gap-2 px-2.5 py-1 rounded-full border text-xs", t.chip)}>{children}</span>
  );
}

function Section({title, action, children}){
  return (
    <section className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white/90">{title}</h3>
        {action}
      </div>
      {children}
    </section>
  );
}

function Empty({children}){
  return (
    <div className="text-sm text-gray-400 text-center py-6">{children}</div>
  );
}

function ComponentsGrid({items=[]}){
  if (!items.length) return <Empty>No components</Empty>;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(c => (
        <div key={c.id} className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
          <div className="relative p-4 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-white/90 font-medium truncate">{c.name}</div>
                {c.notes && <div className="text-xs text-gray-400 truncate">{c.notes}</div>}
              </div>
              <Chip tone={c.status}><Dot tone={c.status}/> <span className="hidden sm:inline">{STATUS_LABEL[c.status] || c.status}</span></Chip>
            </div>
            {typeof c.uptime_90d === "number" && (
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                  <span>Uptime (90d)</span>
                  <span className="tabular-nums">{c.uptime_90d.toFixed(2)}%</span>
                </div>
                <Progress value={c.uptime_90d} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function IncidentCard({inc}){
  const tone = inc.impact || "degraded";
  const t = PALETTE[tone] || PALETTE.degraded;
  const range = formatRange(inc.start, inc.end);
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/5 overflow-hidden">
      <div className={classNames("absolute -inset-0.5 rounded-xl bg-gradient-to-br blur-xl opacity-30", t.ring)} />
      <div className="relative p-5 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Dot tone={tone}/>
              <h4 className="text-white font-semibold leading-tight">{inc.title}</h4>
            </div>
            <div className="text-xs text-gray-400">{range}</div>
            {Array.isArray(inc.affected_components) && inc.affected_components.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {inc.affected_components.map(id => (
                  <span key={id} className="text-xs text-gray-300/80 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">{id}</span>
                ))}
              </div>
            )}
          </div>
          <Chip tone={tone}>{STATUS_LABEL[tone] || tone}</Chip>
        </div>

        {Array.isArray(inc.updates) && inc.updates.length > 0 && (
          <ol className="space-y-3">
            {inc.updates.map((u, i) => (
              <li key={i} className="relative pl-5">
                <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-white/40" />
                <div className="text-sm text-gray-200 leading-relaxed">{u.body}</div>
                <div className="mt-1 text-xs text-gray-400 flex items-center gap-2">
                  <span className="tabular-nums">{new Intl.DateTimeFormat(undefined, {dateStyle: "medium", timeStyle: "short"}).format(new Date(u.time))}</span>
                  {u.status && <span className="text-white/70">·</span>}
                  {u.status && <span className="capitalize">{u.status}</span>}
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

function MaintCard({m}){
  const [start, end] = String(m.window || "").split("/");
  return (
    <div className="relative rounded-xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="relative p-5 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Dot tone="maintenance"/>
              <h4 className="text-white font-semibold leading-tight">{m.title}</h4>
            </div>
            <div className="text-xs text-gray-400 mt-0.5">{formatRange(start, end)}</div>
          </div>
          <Chip tone="maintenance">Maintenance</Chip>
        </div>
        {m.body && <p className="text-sm text-gray-200 leading-relaxed">{m.body}</p>}
      </div>
    </div>
  );
}

const FALLBACK = {
  updated_at: new Date().toISOString(),
  status: "operational",
  summary: "All systems are operational",
  components: [
    {id: "api", name: "Public API", status: "operational", uptime_90d: 99.97},
    {id: "dashboard", name: "Dashboard", status: "operational", uptime_90d: 99.99},
    {id: "auth", name: "Auth", status: "operational", uptime_90d: 99.95}
  ],
  incidents: [],
  scheduled_maintenances: []
};

export default function StatusBoard({src = "/status.json", refreshMs = 60_000, title = "Status"}){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = async ()=>{
    try{
      setLoading(true);
      setError(null);
      const res = await fetch(src, {cache: "no-store"});
      if(!res.ok) throw new Error(`Failed to fetch ${src}: ${res.status}`);
      const j = await res.json();
      setData(j);
    }catch(e){
      console.warn("StatusBoard: using FALLBACK due to error:", e);
      setError(String(e?.message || e));
      setData(FALLBACK);
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{ load(); }, [src]);
  useInterval(()=>{ load(); }, refreshMs);

  const overall = (data?.status || "operational");
  const tone = PALETTE[overall] ? overall : "operational";
  const palette = PALETTE[tone];

  const updatedAt = useMemo(()=>{
    try{ return data?.updated_at ? new Date(data.updated_at) : null; }catch{ return null; }
  }, [data]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"/>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0,transparent_60%)]"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16 space-y-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black/40 to-black/60 backdrop-blur-xl">
          <div className={classNames("absolute inset-0 blur-2xl opacity-50 bg-gradient-to-br", palette.ring)} />
          <div className="relative p-8 sm:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-3">
                  <Dot tone={tone} />
                  <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                    {title}
                  </h1>
                </div>
                <div className={classNames("text-sm", palette.text)}>
                  {STATUS_LABEL[tone]}{data?.summary ? ` — ${data.summary}` : ""}
                </div>
                <div className="text-xs text-gray-400">
                  Last updated {updatedAt ? new Intl.DateTimeFormat(undefined, {dateStyle: "medium", timeStyle: "short"}).format(updatedAt) : "just now"}
                  {error && <span className="text-rose-300"> · offline mode</span>}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Chip tone={tone}><Dot tone={tone}/> {STATUS_LABEL[tone]}</Chip>
              </div>
            </div>
          </div>
        </div>

        <Section title="Components">
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_,i)=> (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 animate-pulse">
                  <div className="h-4 w-1/2 bg-white/10 rounded mb-3"/>
                  <div className="h-2 w-full bg-white/10 rounded"/>
                </div>
              ))}
            </div>
          ) : (
            <ComponentsGrid items={data?.components || []} />
          )}
        </Section>

        <Section title="Incidents">
          {loading ? (
            <Empty>Loading…</Empty>
          ) : (data?.incidents?.length ? (
            <div className="space-y-4">
              {data.incidents.map(inc => <IncidentCard key={inc.id} inc={inc} />)}
            </div>
          ) : (
            <Empty>No incidents reported</Empty>
          ))}
        </Section>

        <Section title="Scheduled maintenance">
          {loading ? (
            <Empty>Loading…</Empty>
          ) : (data?.scheduled_maintenances?.length ? (
            <div className="space-y-4">
              {data.scheduled_maintenances.map(m => <MaintCard key={m.id} m={m} />)}
            </div>
          ) : (
            <Empty>No maintenance planned</Empty>
          ))}
        </Section>

        <div className="text-xs text-gray-500 text-center pt-4">
          Powered by a tiny JSON file · Auto‑refresh every {Math.round(refreshMs/1000)}s
        </div>
      </div>
    </div>
  );
}
