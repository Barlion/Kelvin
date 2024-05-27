document.querySelectorAll('.icon-link').forEach(link =>{
    link.addEventListener('click',function(e) {
        document.querySelectorAll('.icon-link').forEach(link=>
        link.classList.remove('active'));

        this.classList.add('active');
    });
});

function changeColor(button) {
    button.classList.toggle('clicked');
}

function copyReferralLink() {
    const link = document.querySelector('.referral-link span').textContent;
    navigator.clipboard.writeText(link).then(() => {
        alert('Referral link copied to clipboard');
    });
}

function showBanner(size) {
    const sizes = document.querySelectorAll('.banner-sizes button');
    sizes.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const bannerCode = document.getElementById('banner-code');
    if (size === '125x125') {
        bannerCode.textContent = `
<a href="https://intelligencebotminer.com/?ref=BARLION">
<img src="https://intelligencebotminer.com/banners/banner125.gif" alt="" width="125" height="125" />
</a>`;
    } else if (size === '468x60') {
        bannerCode.textContent = `
<a href="https://intelligencebotminer.com/?ref=BARLION">
<img src="https://intelligencebotminer.com/banners/banner468.gif" alt="" width="468" height="60" />
</a>`;
    } else if (size === '728x90') {
        bannerCode.textContent = `
<a href="https://intelligencebotminer.com/?ref=BARLION">
<img src="https://intelligencebotminer.com/banners/banner728.gif" alt="" width="728" height="90" />
</a>`;
    }
}