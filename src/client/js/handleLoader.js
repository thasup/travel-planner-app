export function handleLoader() {
    const loader = document.getElementsByClassName('loader');
    const content = document.getElementsByClassName('detail');
    
    const init = () => {
        loader[0].style.opacity = 1;
        loader[0].classList.remove('none');

        content[0].style.display = 'block';
        setTimeout(() => {
            content[0].style.opacity = 1;
            
            loader[0].style.opacity = 0;
            loader[0].classList.add('none');
        }, 5000)
    };

    init();
};