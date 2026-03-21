import { Link } from 'react-router-dom';
import { sections } from '../data/sections';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            今の自分に必要な講義を<br />すぐ見つける
          </h1>
          <p className="text-xl text-indigo-100 mb-10">
            子育ての学校・全39講義。3分の診断で、<br className="hidden sm:block" />
            あなたの悩みにぴったりの講義がわかります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quiz"
              className="inline-block bg-white text-indigo-700 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              🎯 診断スタート（3分）
            </Link>
            <Link
              to="/browse"
              className="inline-block bg-white/20 backdrop-blur text-white font-bold px-8 py-4 rounded-full text-lg border border-white/30 hover:bg-white/30 transition"
            >
              📚 全講義を見る
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">診断の流れ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { num: '1', text: 'お子さんの年齢を選ぶ', icon: '👶' },
              { num: '2', text: '最も気になる悩みを選ぶ', icon: '💭' },
              { num: '3', text: 'その他の気になることを選ぶ', icon: '✅' },
              { num: '4', text: '結果でおすすめ講義を確認', icon: '🎯' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {step.num}
                </div>
                <div className="text-2xl mb-2">{step.icon}</div>
                <p className="text-sm text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">8つのセクション・全39講義</h2>
          <p className="text-center text-gray-500 mb-10">科学的根拠に基づいた子育ての知恵が詰まっています</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sections.map((s) => (
              <Link
                key={s.id}
                to={`/browse?section=${s.id}`}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mb-3 ${s.color}`}>
                  Section {s.id}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{s.description}</p>
                <p className="text-xs text-gray-400">{s.lectureCount}講義</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-indigo-600 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">さっそく始めてみましょう</h2>
        <p className="text-indigo-200 mb-8">3分で、今の自分に必要な講義がわかります</p>
        <Link
          to="/quiz"
          className="inline-block bg-white text-indigo-700 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition"
        >
          診断スタート
        </Link>
      </section>
    </div>
  );
}
