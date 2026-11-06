import { useEffect, useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Clock, HelpCircle, LogIn, Puzzle, Search } from "lucide-react";
import { img } from "../components/railwire/assets";

export const Route = createFileRoute("/entertainment-zone")({
  component: EntertainmentZonePage,
});

// Section background from the WordPress export. Save the file with this exact name in assets.
const GAME_BG = img("entertain-bg-1-e1779852292371.png");
const HERO_BG = img("entertain-bg-e1779689510334.png");
const QUIZ_BG = img("entertain-bg-2-e1779853325340.png");

// Six flower pairs = 12 cards. File names must match the files in your assets folder.
const FLOWERS = [
  img("tulip.png"),
  img("blueflower.png"),
  img("whiteflower.png"),
  img("lotus.png"),
  img("lily.png"),
  img("rose.png"),
];

const WORD_GRID = [
  "RAILWAYX",
  "FIBERQZK",
  "INTERNET",
  "SIGNALMP",
  "KLTOWERB",
  "ROUTERAC",
  "BROADBND",
  "ZQWMXPLT",
];
const WORDS = ["RAILWAY", "FIBER", "INTERNET", "SIGNAL"];

const QUIZ = [
  {
    q: "Which company runs RailWire broadband?",
    options: ["BSNL", "RailTel", "Jio", "Airtel"],
    answer: 1,
  },
  {
    q: "Which medium carries most RailWire broadband signals?",
    options: ["Copper", "Fiber optic", "Satellite", "Coaxial"],
    answer: 1,
  },
  {
    q: "Which network is RailWire's backbone built along?",
    options: ["Highways", "Railway tracks", "Power lines", "Canals"],
    answer: 1,
  },
  {
    q: "What does 'Mbps' measure?",
    options: ["Distance", "Data speed", "Voltage", "Storage"],
    answer: 1,
  },
  {
    q: "What does 'ISP' stand for?",
    options: [
      "Internet Service Provider",
      "Internal Signal Policy",
      "Input Speed Protocol",
      "Internet Shared Path",
    ],
    answer: 0,
  },
  {
    q: "Which device converts broadband signal for Wi-Fi use?",
    options: ["Router", "Printer", "Scanner", "Speaker"],
    answer: 0,
  },
  {
    q: "Which of these is a fiber-based broadband technology?",
    options: ["FTTH", "DSL", "Dial-up", "ISDN"],
    answer: 0,
  },
  {
    q: "What is the common name for a Wi-Fi network password?",
    options: ["PIN", "Key", "Passphrase", "Token"],
    answer: 2,
  },
  { q: "Which is a unit of data?", options: ["Hertz", "Gigabyte", "Watt", "Ohm"], answer: 1 },
  {
    q: "Which year range is 'the internet era' most associated with?",
    options: ["1900s", "1960s–1990s onward", "1800s", "1700s"],
    answer: 1,
  },
];

const CARD_BACK = {
  backgroundImage: "repeating-linear-gradient(45deg, #dce8f7 0 14px, #f3f7fc 14px 28px)",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeDeck() {
  return shuffle([...FLOWERS, ...FLOWERS]).map((symbol, id) => ({ id, symbol }));
}

function formatTime(total: number) {
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

function PanelHeader({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative flex items-center justify-between overflow-hidden bg-gradient-to-r from-sky-50 to-blue-50 px-6 py-6 md:px-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(#bfdbfe 2px, transparent 2px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "right top",
          maskImage: "linear-gradient(to left, black, transparent 60%)",
        }}
      />
      <div className="relative text-blue-900">{icon}</div>
      <div className="relative text-right">
        <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">{title}</h2>
        <p className="mt-1 text-slate-600">{subtitle}</p>
      </div>
    </div>
  );
}

function MemoryMatch() {
  const { t } = useTranslation();
  const [cards, setCards] = useState(makeDeck);
  const [open, setOpen] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const done = matched.length === cards.length;
  const started = moves > 0 || open.length > 0;

  useEffect(() => {
    if (!started || done) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [started, done]);

  useEffect(() => {
    if (open.length !== 2) return undefined;
    const [a, b] = open;
    setMoves((m) => m + 1);
    if (cards[a].symbol === cards[b].symbol) {
      setMatched((m) => [...m, a, b]);
      setOpen([]);
      return undefined;
    }
    const tTimer = setTimeout(() => setOpen([]), 800);
    return () => clearTimeout(tTimer);
  }, [open, cards]);

  const flip = (id: number) => {
    if (open.length === 2 || open.includes(id) || matched.includes(id)) return;
    setOpen((o) => [...o, id]);
  };

  const restart = () => {
    setCards(makeDeck());
    setOpen([]);
    setMatched([]);
    setMoves(0);
    setSeconds(0);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <PanelHeader
        icon={<Puzzle className="h-12 w-12" strokeWidth={2.5} />}
        title={t("entertainmentPage.memoryTitle", { defaultValue: "Memory Match" })}
        subtitle={t("digital.zone.l1", { defaultValue: "Find all the matching pairs!" })}
      />

      <div className="grid grid-cols-4 gap-3 p-5 md:gap-4 md:p-8">
        {cards.map((c) => {
          const show = open.includes(c.id) || matched.includes(c.id);
          return (
            <button
              key={c.id}
              onClick={() => flip(c.id)}
              aria-label="memory card"
              className="flex aspect-square items-center justify-center overflow-hidden rounded-md border border-blue-100 shadow-[0_6px_0_-3px_rgba(15,23,42,0.15)] transition hover:brightness-95"
              style={show ? { background: "#f4f4f4" } : CARD_BACK}
            >
              {show && <img src={c.symbol} alt="" className="h-full w-full object-contain p-2" />}
            </button>
          );
        })}
      </div>

      {done && (
        <p className="px-6 pb-2 text-center font-semibold text-green-700">
          {t("entertainmentPage.won", {
            turns: moves,
            defaultValue: `Well done! You matched all pairs in ${moves} moves.`,
          })}
        </p>
      )}

      <div className="mx-5 mb-5 flex items-center justify-between rounded-lg bg-slate-50 px-5 py-4 md:mx-8">
        <div className="flex items-center gap-2 font-semibold text-slate-800">
          <Clock className="h-5 w-5" />
          <span>{formatTime(seconds)}</span>
        </div>
        <div className="flex items-center gap-2 font-semibold text-slate-800">
          <LogIn className="h-5 w-5" />
          <span>
            {t("entertainmentPage.turns", { defaultValue: "Turns" })}: {moves}
          </span>
        </div>
      </div>
      <div className="pb-5 text-center">
        <button onClick={restart} className="text-sm font-semibold text-blue-700 underline">
          {t("entertainmentPage.playAgain", { defaultValue: "Restart game" })}
        </button>
      </div>
    </div>
  );
}

function WordSearch() {
  const { t } = useTranslation();
  const [start, setStart] = useState<[number, number] | null>(null);
  const [found, setFound] = useState<string[]>([]);
  const [message, setMessage] = useState(
    "Click the first and last letter of a word in the same row.",
  );

  const pick = (r: number, c: number) => {
    if (!start) {
      setStart([r, c]);
      setMessage("Now click the last letter of the word.");
      return;
    }
    const [sr, sc] = start;
    setStart(null);
    if (sr !== r) {
      setMessage("Letters must be in the same row. Try again.");
      return;
    }
    const from = Math.min(sc, c);
    const to = Math.max(sc, c);
    const word = WORD_GRID[r].slice(from, to + 1);
    const reversed = word.split("").reverse().join("");
    const hit = WORDS.find((w) => w === word || w === reversed);
    if (hit && !found.includes(hit)) {
      setFound((f) => [...f, hit]);
      setMessage(`Found ${hit}!`);
    } else {
      setMessage("Not a target word. Try again.");
    }
  };

  const isFound = (r: number, c: number) =>
    WORDS.some((w) => {
      const idx = WORD_GRID[r].indexOf(w);
      return found.includes(w) && idx !== -1 && c >= idx && c < idx + w.length;
    });

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <PanelHeader
        icon={<Search className="h-12 w-12" strokeWidth={2.5} />}
        title={t("entertainmentPage.wordTitle", { defaultValue: "Word Search Puzzle" })}
        subtitle={t("digital.zone.l3", { defaultValue: "Find the word from the grid!" })}
      />

      <div className="border-t border-slate-200 px-6 py-4 text-lg text-slate-800">
        {t("entertainmentPage.wordsToFind", { defaultValue: "Words to Find" })}
      </div>

      <div className="overflow-x-auto px-4 pb-6 md:px-8">
        <div className="mx-auto inline-grid gap-1 sm:gap-2">
          {WORD_GRID.map((row, r) => (
            <div key={r} className="flex gap-1 sm:gap-2">
              {row.split("").map((ch, c) => {
                const active = start && start[0] === r && start[1] === c;
                return (
                  <button
                    key={c}
                    onClick={() => pick(r, c)}
                    className={`h-8 w-8 rounded text-sm font-semibold sm:h-10 sm:w-10 sm:text-base ${
                      isFound(r, c)
                        ? "bg-green-500 text-white"
                        : active
                          ? "bg-blue-500 text-white"
                          : "text-slate-800 hover:bg-blue-50"
                    }`}
                  >
                    {ch}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
        <p className="font-semibold text-slate-800">Find the words</p>
        <p className="mt-1 text-sm text-slate-700">{WORDS.join(", ")}</p>
        <p className="mt-2 text-sm text-slate-600">
          {message} Found: {found.length} / {WORDS.length}
        </p>
      </div>
    </div>
  );
}

function DailyQuiz() {
  const [index, setIndex] = useState(-1);
  const [choice, setChoice] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const start = () => {
    setIndex(0);
    setChoice(null);
    setScore(0);
    setFinished(false);
  };

  const next = () => {
    if (choice === QUIZ[index].answer) setScore((s) => s + 1);
    if (index + 1 >= QUIZ.length) {
      setFinished(true);
      return;
    }
    setIndex(index + 1);
    setChoice(null);
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
      setChoice(null);
    }
  };

  const { t } = useTranslation();

  if (index === -1) {
    return (
      <div className="px-6 py-10 text-center">
        <button
          onClick={start}
          className="rounded-full bg-blue-700 px-6 py-2 text-white hover:bg-blue-800"
        >
          {t("digital.zone.btn", { defaultValue: "Play & Explore" })}
        </button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="px-6 py-10 text-center">
        <p className="text-xl font-semibold">
          {t("entertainmentPage.yourScore", {
            score,
            total: QUIZ.length,
            defaultValue: `Your score: ${score} / ${QUIZ.length}`,
          })}
        </p>
        <button
          onClick={start}
          className="mt-4 rounded-full bg-blue-700 px-6 py-2 text-white hover:bg-blue-800"
        >
          {t("entertainmentPage.retakeQuiz", { defaultValue: "Try Again" })}
        </button>
      </div>
    );
  }

  const item = QUIZ[index];
  return (
    <div className="px-6 py-8 md:px-10">
      <p className="mb-2 text-sm text-slate-600">
        {t("entertainmentPage.question", { defaultValue: "Question" })} {index + 1}{" "}
        {t("entertainmentPage.of", { defaultValue: "of" })} {QUIZ.length}
      </p>
      <h3 className="mb-4 text-lg font-semibold">{item.q}</h3>
      <div className="grid gap-3">
        {item.options.map((opt, i) => (
          <button
            key={opt}
            onClick={() => setChoice(i)}
            className={`rounded-lg border px-4 py-3 text-left ${
              choice === i
                ? "border-blue-600 bg-blue-50 font-semibold"
                : "border-slate-300 bg-white hover:bg-slate-50"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        <button
          onClick={prev}
          disabled={index === 0}
          className="rounded-full border px-5 py-2 disabled:opacity-40"
        >
          {t("blogs.previousAria", { defaultValue: "Previous" })}
        </button>
        <button
          onClick={next}
          disabled={choice === null}
          className="rounded-full bg-blue-700 px-5 py-2 text-white disabled:opacity-40"
        >
          {index + 1 === QUIZ.length
            ? t("entertainmentPage.quizFinished", { defaultValue: "Finish" })
            : t("blogs.nextAria", { defaultValue: "Next" })}
        </button>
      </div>
    </div>
  );
}

function EntertainmentZonePage() {
  const { t } = useTranslation();

  return (
    <main className="bg-white">
      <section className="relative flex h-[300px] items-center justify-center overflow-hidden text-white">
        <img
          src={HERO_BG}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-700/70 to-cyan-600/60" />
        <div className="relative text-center">
          <p className="text-sm uppercase tracking-widest text-blue-200">RailWire</p>
          <h1 className="mt-2 text-5xl font-bold">
            {t("entertainmentPage.heroTitle", { defaultValue: "Entertainment Zone" })}
          </h1>
          <p className="mt-3 text-lg text-blue-100">
            {t("entertainmentPage.heroDesc", {
              defaultValue:
                "Fun brain games, memory match puzzles, and quizzes for students, families, and everyday users.",
            })}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-12">
        <img
          src={GAME_BG}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <MemoryMatch />
          <WordSearch />
        </div>
      </section>

      <section className="relative overflow-hidden px-5 pb-16 pt-12">
        <img
          src={QUIZ_BG}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <PanelHeader
            icon={<HelpCircle className="h-12 w-12" strokeWidth={2.5} />}
            title={t("entertainmentPage.quizTitle", { defaultValue: "General Quiz" })}
            subtitle={t("digital.zone.desc", {
              defaultValue:
                "Challenge yourself with daily quizzes on current affairs, technology, education, sports, and general knowledge.",
            })}
          />
          <DailyQuiz />
        </div>
      </section>

      <div className="pb-16 text-center">
        <Link to="/" className="text-blue-700 underline">
          {t("statePage.backHome", { defaultValue: "Back to Home" })}
        </Link>
      </div>
    </main>
  );
}
