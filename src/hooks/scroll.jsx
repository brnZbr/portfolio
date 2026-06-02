export const handleScroll = (e, targetId) => {
    e.preventDefault();

    const id = targetId.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};