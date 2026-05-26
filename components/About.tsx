export function About() {
  return (
    <div className="surface-lg p-6 md:p-10 lg:p-14">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[var(--surface-2)] border border-[var(--border)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/dawson.jpg"
              alt="Dawson Russell"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-7 space-y-8">
          <div className="spec-label">Founder</div>
          <p className="display-thin text-2xl md:text-3xl text-white">
            I'm Dawson. I fell in love with video in sixth grade, the day I
            got my first iMac — the big purple one.
          </p>
          <p className="text-base md:text-lg text-[var(--muted-2)] leading-relaxed max-w-xl">
            High school was Jackass-knockoff shoots with my friends and
            late nights in iMovie — and a couple of media-tech awards
            along the way. College pulled me into marketing, turning that
            creative instinct into something brands would pay for.
          </p>
          <p className="text-base md:text-lg text-[var(--muted-2)] leading-relaxed max-w-xl">
            Sixteen-plus years marketing for private equity firms,
            alternative investment funds, and capital-raise teams taught me
            the highest-stakes version of storytelling — how to make
            someone believe a story enough to write a check.
          </p>
          <p className="text-base md:text-lg text-[var(--muted-2)] leading-relaxed max-w-xl">
            Now I've come back to my roots — the story, the art of telling
            it, the craft of building something from a blank page. AI has
            made it possible to do that in a way that wasn't possible
            before. That's what this studio is.
          </p>
        </div>
      </div>
    </div>
  );
}
