// Shared page behavior: scroll reveal and table-of-contents highlight. Loaded with defer.
document.documentElement.classList.add('js');

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
        for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => io.observe(el));

    const links = [...document.querySelectorAll('.toc a')];
    if (links.length) {
        const byId = new Map(links.map(a => [a.hash.slice(1), a]));
        const spy = new IntersectionObserver(entries => {
            for (const e of entries) if (e.isIntersecting) {
                links.forEach(a => a.classList.remove('active'));
                byId.get(e.target.id)?.classList.add('active');
            }
        }, { rootMargin: '-20% 0px -70% 0px' });
        document.querySelectorAll('.doc h2[id]').forEach(h => spy.observe(h));
    }
} else {
    reveals.forEach(el => el.classList.add('in'));
}

// Language: English by default. Pages that exist in both languages list each other with
// <link rel="alternate" hreflang="en|vi">. Choosing a language with the .lang link is
// remembered, and later pages open in that language when a version exists.
const pageLang = document.documentElement.lang.startsWith('vi') ? 'vi' : 'en';
document.querySelectorAll('a.lang').forEach(a => a.addEventListener('click', () => {
    try { localStorage.setItem('lang', pageLang === 'vi' ? 'en' : 'vi'); } catch {}
}));
try {
    const wanted = localStorage.getItem('lang');
    const alt = wanted && wanted !== pageLang && document.querySelector(`link[rel="alternate"][hreflang="${wanted}"]`);
    if (alt) location.replace(alt.href + location.hash);
} catch {}
