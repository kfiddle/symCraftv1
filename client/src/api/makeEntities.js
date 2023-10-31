import fetchPost from '../utils/fetchPost';

export const createInst = async (newInst) => {
  const response = await fetchPost('insts', newInst);
  return response;
};

export const createPlayer = async (newPlayer) => {
  const response = await fetchPost('players', newPlayer);
  return response;
};

export const createPiece = async (newPiece) => {
  const response = await fetchPost('pieces', newPiece);
  return response;
};

export const createGig = async (newGig) => {
  const response = await fetchPost('gigs', newGig);
  return response;
};

export const createChair = async (newChair) => {
  const response = await fetchPost('chairs/single_chair', newChair);
  return response;
};

export const createChairs = async (newChairs) => {
  const response = await fetchPost('chairs/array', newChairs);
  return response;
};

export const createMessage = async (newMessage) => {
  const response = await fetchPost('gigs', newMessage);
  return response;
};
