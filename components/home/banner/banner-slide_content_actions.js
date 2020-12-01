export default function BannerSlideContentActions() {
  return (
    <div className="grid items-center gap-x-2">
      <button className="font-semibold p-2.5 bg-rose-500 border border-rose-500 text-white hover:bg-rose-600 hover:border-rose-600">
        Solicitar información
      </button>
      <p className="text-right text-title-lg font-semibold">$2,000,000</p>
      <style jsx>{`
        div {
          grid-template-columns: auto 1fr;
        }
      `}</style>
    </div>
  );
}
