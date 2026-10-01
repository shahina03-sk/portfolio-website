const body=document.body,theme=document.getElementById('theme'),toast=document.getElementById('toast');
if(localStorage.portfolioTheme==='dark')body.classList.add('dark');
theme.onclick=()=>{body.classList.toggle('dark');localStorage.portfolioTheme=body.classList.contains('dark')?'dark':'light'};
document.getElementById('contactForm').onsubmit=e=>{e.preventDefault();toast.textContent='Thanks! Your message has been received.';toast.classList.add('show');e.target.reset();setTimeout(()=>toast.classList.remove('show'),2500)}
