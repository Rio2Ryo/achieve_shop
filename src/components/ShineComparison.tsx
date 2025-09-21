'use client'

import { HiOutlineSun } from 'react-icons/hi'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ShineComparison() {
  const { t } = useLanguage()

  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              {t({
                JP: '光の反射をコントロールする技術',
                EN: 'Technology to Control Light Reflection'
              })}
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
              {t({
                JP: 'マザベジパウダーの粒子形状が光の反射を変え、テカリを自然な艶に変換します',
                EN: 'Mother Vegetable powder particles change light reflection, converting shine into natural glow'
              })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before - 凹凸が陰になり際立つ */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
              <div className="text-center mb-6">
                <span className="text-3xl">✕</span>
                <h3 className="text-xl font-semibold text-white mt-2">
                  {t({ JP: '凹凸が陰になり際立つ', EN: 'Shadows Emphasize Texture' })}
                </h3>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 mb-6">
                <div className="text-center">
                  {/* Sun icon */}
                  <HiOutlineSun className="h-10 w-10 text-yellow-300 mx-auto mb-6" />

                  {/* Light rays going in same direction */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-48">
                      <div className="absolute left-0 text-red-400 text-2xl" style={{ transform: 'rotate(45deg)' }}>→</div>
                      <div className="absolute left-12 text-red-400 text-2xl" style={{ transform: 'rotate(45deg)' }}>→</div>
                      <div className="absolute left-24 text-red-400 text-2xl" style={{ transform: 'rotate(45deg)' }}>→</div>
                      <div className="absolute left-36 text-red-400 text-2xl" style={{ transform: 'rotate(45deg)' }}>→</div>
                    </div>
                  </div>

                  {/* Skin layers visualization */}
                  <div className="mt-12 space-y-1">
                    <div className="h-3 bg-gradient-to-r from-orange-200 to-orange-300 rounded"></div>
                    <div className="h-6 bg-gradient-to-r from-pink-200 to-pink-300 rounded"></div>
                    <div className="h-8 bg-gradient-to-r from-pink-100 to-pink-200 rounded"></div>
                    <div className="h-6 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-300">
                  {t({
                    JP: '皮脂や汗が同じ方向に光を反射し、テカリとして目立ちます。凹凸部分に影ができ、肌の質感が強調されてしまいます。',
                    EN: 'Oil and sweat reflect light uniformly, creating visible shine. Shadows form in textured areas, emphasizing skin imperfections.'
                  })}
                </p>
                <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                  <p className="text-xs font-semibold text-red-300 mb-1">
                    {t({ JP: '問題点', EN: 'Issue' })}
                  </p>
                  <p className="text-xs text-gray-400">
                    {t({
                      JP: 'メイクが崩れやすく、時間とともにテカリが増す',
                      EN: 'Makeup breaks down easily, shine increases over time'
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* After - 凹凸にシリカが入り目立たなくなる */}
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
              <div className="text-center mb-6">
                <span className="text-3xl text-amber-300">○</span>
                <h3 className="text-xl font-semibold text-white mt-2">
                  {t({ JP: '凹凸にシリカが入り目立たなくなる', EN: 'Silica Fills Texture, Reducing Visibility' })}
                </h3>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 mb-6">
                <div className="text-center">
                  {/* Sun icon */}
                  <HiOutlineSun className="h-10 w-10 text-yellow-300 mx-auto mb-6" />

                  {/* Light rays scattering in different directions */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-48">
                      <div className="absolute left-0 text-amber-300 text-2xl" style={{ transform: 'rotate(30deg)' }}>↗</div>
                      <div className="absolute left-12 text-amber-400 text-2xl" style={{ transform: 'rotate(60deg)' }}>↑</div>
                      <div className="absolute left-24 text-amber-300 text-2xl" style={{ transform: 'rotate(-30deg)' }}>↖</div>
                      <div className="absolute left-36 text-amber-400 text-2xl" style={{ transform: 'rotate(45deg)' }}>↗</div>
                    </div>
                  </div>

                  {/* Skin layers with particles */}
                  <div className="mt-12 space-y-1 relative">
                    {/* Silica particles on top */}
                    <div className="absolute -top-2 left-0 right-0 flex justify-center gap-2">
                      <div className="w-2 h-3 bg-amber-400 rounded-full opacity-80"></div>
                      <div className="w-3 h-2 bg-amber-300 rounded-full opacity-80"></div>
                      <div className="w-2.5 h-2.5 bg-amber-500 rounded-full opacity-80"></div>
                      <div className="w-2 h-3 bg-amber-300 rounded-full opacity-80"></div>
                      <div className="w-3 h-2 bg-amber-400 rounded-full opacity-80"></div>
                    </div>
                    <div className="h-3 bg-gradient-to-r from-orange-200 to-orange-300 rounded"></div>
                    <div className="h-6 bg-gradient-to-r from-pink-200 to-pink-300 rounded"></div>
                    <div className="h-8 bg-gradient-to-r from-pink-100 to-pink-200 rounded"></div>
                    <div className="h-6 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-300">
                  {t({
                    JP: 'マザベジシリカの不規則な粒子が凹凸を埋め、光を様々な方向へ散乱。テカリが消えて自然な艶だけが残ります。',
                    EN: 'Irregular Mother Vegetable silica particles fill texture, scattering light in various directions. Shine disappears, leaving only natural glow.'
                  })}
                </p>
                <div className="rounded-xl bg-amber-400/10 border border-amber-400/20 p-4">
                  <p className="text-xs font-semibold text-amber-300 mb-1">
                    {t({ JP: 'メリット', EN: 'Benefit' })}
                  </p>
                  <p className="text-xs text-gray-300">
                    {t({
                      JP: '24時間崩れにくく、清潔感のある肌をキープ',
                      EN: 'Maintains fresh, clean skin for 24 hours without breaking down'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}