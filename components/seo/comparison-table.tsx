import { Check, Minus } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  voxa: boolean | string;
  competitor: boolean | string;
}

interface ComparisonTableProps {
  competitorName: string;
  features: ComparisonFeature[];
}

export default function ComparisonTable({ competitorName, features }: ComparisonTableProps) {
  return (
    <div className="w-full overflow-x-auto my-12">
      <div className="min-w-[600px]">
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 border-b border-white/[0.06] pb-4 mb-4">
          <div className="font-semibold text-white/80">Feature</div>
          <div className="font-semibold text-center text-voxa-purple">Voxa</div>
          <div className="font-semibold text-center text-white/50">{competitorName}</div>
        </div>

        {/* Rows */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 items-center p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]"
            >
              <div className="text-sm font-medium">{feature.name}</div>
              <div className="text-center flex justify-center">
                {typeof feature.voxa === 'boolean' ? (
                  feature.voxa ? (
                    <Check className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Minus className="w-5 h-5 text-white/20" />
                  )
                ) : (
                  <span className="text-sm text-white/80">{feature.voxa}</span>
                )}
              </div>
              <div className="text-center flex justify-center">
                {typeof feature.competitor === 'boolean' ? (
                  feature.competitor ? (
                    <Check className="w-5 h-5 text-white/60" />
                  ) : (
                    <Minus className="w-5 h-5 text-white/20" />
                  )
                ) : (
                  <span className="text-sm text-white/50">{feature.competitor}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
