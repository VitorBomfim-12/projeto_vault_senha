import { useState } from 'react'

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const endpoint = isLogin ? '/auth/login' : '/auth/cadastro';
    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha }),
      })

      const data = await response.json();
      setMensagem(data.message);

      if (response.ok && isLogin) {
        alert("Login realizado! Vá para o dashboard mocréia");
      }
    } catch {
      setMensagem('Erro ao conectar com o servidor.');
    }
    setEmail('');
    setSenha('');
  }

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Cadastro'}</h1>

      <form onSubmit={handleAuth}>
        <input
          type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required
        />
        <input
          type="password" placeholder="Senha" value={senha}
          onChange={(e) => setSenha(e.target.value)} required
        />
        <button type="submit">{isLogin ? 'Entrar' : 'Cadastrar'}</button>
      </form>

      <p>{mensagem}</p>

      <button onClick={() => { setIsLogin(!isLogin); setMensagem(''); }}>
        {isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça Login'}
      </button>
    </div>
  )
}

export default App