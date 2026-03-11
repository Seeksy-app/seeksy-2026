import { FooterSubscribe } from "@/components/footer/FooterSubscribe";

export function AppDirectoryFooter() {
  return (
    <footer className="relative bg-[#070A0F] border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 pb-8 border-b border-white/10 max-w-md">
          <h3 className="text-xl font-bold text-white mb-2">Stay in the loop</h3>
          <p className="text-white/50 text-sm mb-6">Get the latest updates, tips, and exclusive content delivered to your inbox.</p>
          <FooterSubscribe />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} Seeksy. All rights reserved.</p>
          <span className="text-white/30 text-sm">Made with ❤️ for creators</span>
        </div>
      </div>
    </footer>
  );
}
