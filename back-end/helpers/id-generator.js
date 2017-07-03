module.exports = () => {
    return (new Date().getTime() + Math.round(Math.random()*100)).toString();
};