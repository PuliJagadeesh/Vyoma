import { Card, CardContent } from '@/components/ui/Card';
import { Truck, Map, ShieldCheck } from 'lucide-react';
export function Features() {
  const items = [
    {
      icon: <Truck size={48} className="text-accent"/>,
      title: 'Zero‑Touch Delivery',
      desc: 'Eliminate driver costs with Level 4 autonomy.'
    },
    {
      icon: <Map size={48} className="text-accent"/>,
      title: 'Precision Geofencing',
      desc: 'Operate safely within strict, predefined zones.'
    },
    {
      icon: <ShieldCheck size={48} className="text-accent"/>,
      title: 'Fail‑Safe by Design',
      desc: 'Redundant systems ensure uninterrupted service.'
    }
  ];

  return (
    <section className="py-20">
      <h2 className="text-4xl font-heading text-light text-center mb-12">Key Capabilities</h2>
      <div className="grid gap-8 md:grid-cols-3 px-4">
        {items.map((i, idx) => (
          <div key={idx} className="bg-primary/50 backdrop-blur-lg border border-muted rounded-xl p-6 text-center">
            <div className="mb-4">{i.icon}</div>
            <h3 className="text-2xl font-heading text-light mb-2">{i.title}</h3>
            <p className="text-muted">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
