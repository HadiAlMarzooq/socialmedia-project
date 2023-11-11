import create from 'zustand';

const useStore = create(set => ({
  quizScore: 0,
  incrementScore: () => set(state => ({ quizScore: state.quizScore + 1 })),
  resetScore: () => set({ quizScore: 0 }),
}));

export default useStore;
