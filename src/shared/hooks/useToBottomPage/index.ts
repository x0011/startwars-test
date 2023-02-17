export const useToBottomPage = () => document.addEventListener('DOMContentLoaded', () => {
  console.log('Вниз');
  window.scrollTo(0, document.body.scrollHeight);
});
