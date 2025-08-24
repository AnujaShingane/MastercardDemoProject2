// Mock API using local storage + in-memory data.
// Replace these with real endpoints during the hackathon.

const K = {
  donations: "donations",
  volunteers: "volunteers",
  events: "events"
};

function read(key){ try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } }
function write(key, data){ localStorage.setItem(key, JSON.stringify(data)); }

export const Api = {
  listDonations(){ return read(K.donations); },
  addDonation(payload){ const all = read(K.donations); all.unshift({ id:Date.now(), ...payload }); write(K.donations, all); return { ok:true }; },

  listVolunteers(){ return read(K.volunteers); },
  addVolunteer(payload){ const all = read(K.volunteers); all.unshift({ id:Date.now(), ...payload }); write(K.volunteers, all); return { ok:true }; },

  listEvents(){ return read(K.events); },
  seedEvents(sample){ const existing = read(K.events); if(existing.length===0){ write(K.events, sample); } },
};
