import create from 'zustand';

const useStore = create(set => ({
  quizScore: 0,
  incrementScore: (points) => set(state => ({ quizScore: state.quizScore + points })),
  resetScore: () => set({ quizScore: 0 }),
}));

export default useStore;
