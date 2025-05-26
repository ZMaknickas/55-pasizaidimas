export function header(isMainPage = false) {
    const path = isMainPage ? './' : '../';

    document.body.insertAdjacentHTML('afterbegin', `
        <header class="main-header">
        <nav>
                <a href="${path}todo/">Todo</a>
                <a href="${path}add/">Add</a>
            </nav>
        </header>`);
}