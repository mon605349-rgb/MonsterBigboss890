const timers = new Map(); // threadID -> interval

const UNIT = 'ꀘ--𒆙-ꌚ---𒆙ꎭ--𒆙-ꂦ---𓅂𒆙ꀘ-𒆙--ꀘ-𒆙--ꌚ---𒆙ꎭ-𓅂--𒆙𓅂ꂦ--𒆙-ꀘ--𒆙-ꀘ-𒆙--ꌚ--𓅂-𒆙ꎭ-𓅂 --ꂦ--𒆙-ꀘ---𒆙ꀘ𓅂---𒆙ꌚ--𒆙-ꎭ ---ꂦ---ꀘ𒆙---ꀘ--𓅂-𒆙ꌚ--𒆙-ꎭ--ꀘ--𒆙-ꌚ---𒆙ꎭ--𒆙-ꂦ---𓅂𒆙ꀘ-𒆙--ꀘ-𒆙--ꌚ---𒆙ꎭ-𓅂--𒆙𓅂ꂦ--𒆙-ꀘ--𒆙-ꀘ-𒆙--ꌚ--𓅂-𒆙ꎭ-𓅂 --ꂦ--𒆙-ꀘ---𒆙ꀘ𓅂---𒆙ꌚ--𒆙-ꎭ ---ꂦ---ꀘ𒆙---ꀘ--𓅂-𒆙ꌚ--𒆙-ꎭ--ꀘ--𒆙-ꌚ---𒆙ꎭ--𒆙-ꂦ---𓅂𒆙ꀘ-𒆙--ꀘ-𒆙--ꌚ---𒆙ꎭ-𓅂--𒆙𓅂ꂦ--𒆙-ꀘ--𒆙-ꀘ-𒆙--ꌚ--𓅂-𒆙ꎭ-𓅂 --ꂦ--𒆙-ꀘ---𒆙ꀘ𓅂---𒆙ꌚ--𒆙-ꎭ ---ꂦ---ꀘ𒆙---ꀘ--𓅂-𒆙ꌚ--𒆙-ꎭ--ꀘ--𒆙-ꌚ---𒆙ꎭ--𒆙-ꂦ---𓅂𒆙ꀘ-𒆙--ꀘ-𒆙--ꌚ---𒆙ꎭ-𓅂--𒆙𓅂ꂦ--𒆙-ꀘ--𒆙-ꀘ-𒆙--ꌚ--𓅂-𒆙ꎭ-𓅂 --ꂦ--𒆙-ꀘ---𒆙ꀘ𓅂---𒆙ꌚ--𒆙-ꎭ ---ꂦ---ꀘ𒆙---ꀘ--𓅂-𒆙ꌚ--𒆙-ꎭ--ꀘ--𒆙-ꌚ---𒆙ꎭ--𒆙-ꂦ---𓅂𒆙ꀘ-𒆙--ꀘ-𒆙--ꌚ---𒆙ꎭ-𓅂--𒆙𓅂ꂦ--𒆙-ꀘ--𒆙-ꀘ-𒆙--ꌚ--𓅂-𒆙ꎭ-𓅂 --ꂦ--𒆙-ꀘ---𒆙ꀘ𓅂---𒆙ꌚ--𒆙-ꎭ ---ꂦ---ꀘ𒆙---ꀘ--𓅂-𒆙ꌚ--𒆙-ꎭ--ꀘ--𒆙-ꌚ---𒆙ꎭ--𒆙-ꂦ---𓅂𒆙ꀘ-𒆙--ꀘ-𒆙--ꌚ---𒆙ꎭ-𓅂--𒆙𓅂ꂦ--𒆙-ꀘ--𒆙-ꀘ-𒆙--ꌚ--𓅂-𒆙ꎭ-𓅂 --ꂦ--𒆙-ꀘ---𒆙ꀘ𓅂---𒆙ꌚ--𒆙-ꎭ ---ꂦ---ꀘ𒆙---ꀘ--𓅂-𒆙ꌚ--𒆙-ꎭ--ꀘ--𒆙-ꌚ---𒆙ꎭ--𒆙-ꂦ---𓅂𒆙ꀘ-𒆙--ꀘ-𒆙--ꌚ---𒆙ꎭ-𓅂--𒆙𓅂ꂦ--𒆙-ꀘ--𒆙-ꀘ-𒆙--ꌚ--𓅂-𒆙ꎭ-𓅂 --ꂦ--𒆙-ꀘ---𒆙ꀘ𓅂---𒆙ꌚ--𒆙-ꎭ ---ꂦ---ꀘ𒆙---ꀘ--𓅂-𒆙ꌚ--𒆙-ꎭ--ꀘ--𒆙-ꌚ---𒆙ꎭ--𒆙-ꂦ---𓅂𒆙ꀘ-𒆙--ꀘ-𒆙--ꌚ---𒆙ꎭ-𓅂--𒆙𓅂ꂦ--𒆙-ꀘ--𒆙-ꀘ-𒆙--ꌚ--𓅂-𒆙ꎭ-𓅂 --ꂦ--𒆙-ꀘ---𒆙ꀘ𓅂---𒆙ꌚ--𒆙-ꎭ ---ꂦ---ꀘ𒆙---ꀘ--𓅂-𒆙ꌚ--𒆙-ꎭ--';
const NEWSPAPER = UNIT.repeat(20);

module.exports = {
  name: 'جرائد',

  async execute(api, event) {
    const threadID = String(event.threadID);
    const body = (event.body || '').trim();
    const arg = body.slice('جرائد'.length).trim();

    if (arg === 'ايقاف' || arg === 'إيقاف') {
      if (timers.has(threadID)) {
        clearInterval(timers.get(threadID));
        timers.delete(threadID);
        try { await api.sendMessage('🛑 تم إيقاف جرائد', threadID); } catch (e) {}
      }
      return;
    }

    const secs = parseInt(arg, 10);
    if (!/^\d+$/.test(arg) || secs < 1) {
      try { await api.sendMessage('⚠️ الصيغة: جرائد [عدد الثواني] — مثال: جرائد 30', threadID); } catch (e) {}
      return;
    }

    if (timers.has(threadID)) clearInterval(timers.get(threadID));

    const send = async () => {
      try { await api.sendMessage(NEWSPAPER, threadID); }
      catch (e) { console.error('[جرائد] خطأ في الإرسال:', e.message || e); }
    };
    send();
    timers.set(threadID, setInterval(send, secs * 1000));
  },
};
