import { useState } from "react";
import { saveReading } from "../../services/readings";

export default function SaveReadingBlock({ cards }) {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function onSave(e) {
    e.preventDefault();
    setMsg("");
    const name = userName.trim();
    if (!name) return setMsg("EscribeÑ tu nombre reina");
    if (!cards || !cards.length) return setMsg("No hay cartas para guardar.");

    try {
      setLoading(true);
      const saved = await saveReading({ userName: name, cards });
      setMsg(`Guardado ✓ (${new Date(saved.date).toLocaleString("es-ES")})`);
      setUserName("");
    } catch (err) {
      setMsg("Error guardando la lectura. ¿Está corriendo json-server?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSave} style={styles.box}>
      <label style={styles.row}>
        Nombre de usuaria
        <input
          type="text"
          value={userName}
          placeholder="Tu nombre"
          onChange={(e) => setUserName(e.target.value)}
          style={styles.input}
        />
      </label>

      <button type="submit" disabled={loading} style={styles.btn}>
        {loading ? "Guardando..." : "Guardar lectura"}
      </button>

      {msg && <p style={styles.msg}>{msg}</p>}
    </form>
  );
}

const styles = {
  box: { display: "grid", gap: 10, border: "1px solid #eee", padding: 12, borderRadius: 12, maxWidth: 420 },
  row: { display: "grid", gap: 6, fontWeight: 600 },
  input: { padding: "10px 12px", border: "1px solid #ddd", borderRadius: 10 },
  btn: { padding: "10px 14px", borderRadius: 10, border: "none", cursor: "pointer" },
  msg: { margin: 0, opacity: 0.8 },
};
