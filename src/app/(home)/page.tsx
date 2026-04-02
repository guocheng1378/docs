import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center px-4 py-20 relative">
      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(168,224,255,0.25) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(212,150,167,0.15) 0%, transparent 60%)',
        }}
      />

      {/* Logo */}
      <div className="relative mb-8">
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{
            boxShadow:
              '0 0 0 1px rgba(168,224,255,0.3), 0 25px 60px rgba(168,224,255,0.2), 0 10px 30px rgba(0,0,0,0.15)',
          }}
        >
          <Image
            src="/logo.svg"
            alt="REAREye logo"
            width={120}
            height={120}
            priority
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-7xl font-black tracking-tight mb-3 text-center">
        <span className="rear-text">REAR</span><span className="gradient-flow">Eye</span>
      </h1>

      {/* Subtitle */}
      <p className="text-fd-muted-foreground text-lg text-center max-w-md mb-2 leading-relaxed">
        基于 Xposed 框架的小米背屏增强模块
      </p>
      <p className="text-fd-muted-foreground/70 text-sm text-center max-w-sm mb-12">
        为 Xiaomi 17 Pro 系列提供更强大的背屏交互和功能体验
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center mb-16">
        <Link
          href="/docs/basic"
          className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
          style={{
            background: 'linear-gradient(135deg, #4b4e6d 0%, #3a3d5c 100%)',
            color: '#f4e8c1',
            boxShadow: '0 4px 20px rgba(75,78,109,0.4)',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" x2="8" y1="13" y2="13" />
            <line x1="16" x2="8" y1="17" y2="17" />
            <line x1="10" x2="8" y1="9" y2="9" />
          </svg>
          查看文档
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>

        <a
          href="https://qm.qq.com/q/h7e2si9R74"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 hover:border-[#d496a7]/60 hover:bg-[#d496a7]/5"
          style={{ borderColor: 'rgba(212,150,167,0.3)' }}
        >
          {/* QQ icon from Simple Icons */}
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            style={{ color: '#d496a7' }}
          >
            <path d="M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.301-.778-.483-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673"/>
          </svg>
          加入 QQ 群
        </a>
      </div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full">
        {[
          {
            icon: '📦',
            title: '功能增强',
            desc: '为背屏实现更多实用功能，提升使用体验',
          },
          {
            icon: '⚡',
            title: '轻量高效',
            desc: '极致的性能优化，确保流畅的交互体验',
          },
          {
            icon: '🔧',
            title: '灵活配置',
            desc: '用户可以根据需求自定义背屏功能和交互方式',
          },
        ].map((f) => (
          <div
            key={f.title}
            className="rounded-xl p-5 border border-fd-border/50 bg-fd-card/40 backdrop-blur-sm"
          >
            <div className="text-2xl mb-3">{f.icon}</div>
            <div className="font-semibold text-sm mb-1">{f.title}</div>
            <div className="text-fd-muted-foreground text-xs leading-relaxed">{f.desc}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
