import { Link } from 'react-router-dom';
import { sections } from '../data/sections';

export function HomePage() {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-cream to-baby-pink py-16 sm:py-20 px-4 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-coral-100 opacity-60" />
        <div className="absolute top-20 right-12 w-10 h-10 rounded-full bg-amber-100 opacity-60" />
        <div className="absolute bottom-12 left-1/4 w-8 h-8 rounded-full bg-pink-100 opacity-60" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <img
            src={`${base}characters/hoshi-reading.png`}
            alt="星校長と子どもたち"
            className="w-36 h-36 sm:w-44 sm:h-44 object-contain mx-auto mb-6"
          />
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            今のお悩みにぴったりの<br />講義を見つけよう
          </h1>
          <p className="text-lg text-gray-500 mb-10">
            子育ての学校・全39講義。3分の診断で、<br className="hidden sm:block" />
            あなたに合った講義がわかります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quiz"
              className="inline-block bg-coral-400 text-white font-bold px-8 py-4 rounded-full text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              診断スタート（3分）
            </Link>
            <Link
              to="/browse"
              className="inline-block bg-white text-coral-400 font-bold px-8 py-4 rounded-full text-lg border-2 border-coral-200 hover:border-coral-400 transition"
            >
              全講義を見る
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">診断の流れ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { num: '1', text: 'お子さんの年齢を選ぶ', img: `${base}characters/hoshi-listening.png` },
              { num: '2', text: '最も気になる悩みを選ぶ', img: `${base}characters/hoshi-sitting.png` },
              { num: '3', text: 'その他の気になることを選ぶ', img: `${base}characters/hoshi-studying.png` },
              { num: '4', text: '結果でおすすめ講義を確認', img: `${base}characters/hoshi-ok.png` },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-coral-100 text-coral-500 flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {step.num}
                </div>
                <img src={step.img} alt="" className="w-16 h-16 object-contain mx-auto mb-2" />
                <p className="text-sm text-gray-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sections overview */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">8つのセクション・全39講義</h2>
          <p className="text-center text-gray-500 mb-10">科学的根拠に基づいた子育ての知恵が詰まっています</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sections.map((s) => (
              <Link
                key={s.id}
                to={`/browse?section=${s.id}`}
                className="bg-white rounded-2xl p-5 shadow-sm border border-coral-100 hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <div className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium mb-3 ${s.color}`}>
                  Section {s.id}
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{s.description}</p>
                <p className="text-xs text-gray-400">{s.lectureCount}講義</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-coral-400 text-white text-center">
        <img
          src={`${base}characters/hoshi-highfive.png`}
          alt=""
          className="w-28 h-28 object-contain mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold mb-4">さっそく始めてみましょう</h2>
        <p className="text-coral-100 mb-8">3分で、今の自分に必要な講義がわかります</p>
        <Link
          to="/quiz"
          className="inline-block bg-white text-coral-500 font-bold px-8 py-4 rounded-full text-lg shadow-md hover:shadow-lg transition"
        >
          診断スタート
        </Link>
      </section>
    </div>
  );
}
