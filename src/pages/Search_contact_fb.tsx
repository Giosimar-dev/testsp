/* eslint-disable no-irregular-whitespace */
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

function SearchFB() {
  const [searchParams] = useSearchParams();
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const phoneNumber = searchParams.get("contact");
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("");

  const loadingMessages = [
    "Iniciando conexão com o dispositivo...",
    "Acessando servidor remoto...",
    "Sincronizando dados...",
    "Obtendo registros de chamadas...",
    "Analisando mensagens do WhatsApp...",
    "Extraindo arquivos de mídia...",
    "Compilando relatório final...",
    "Processo concluído com sucesso.",
  ];

  useEffect(() => {
    if (!phoneNumber) {
      console.error("Número de telefone não fornecido na URL.");
      return;
    }

    const apiURL = `https://api.z-api.io/instances/3CC49CE5D5687070E2ABFEF429B3AE10/token/D521FDFB78595DEBFA87C85A/profile-picture?phone=55${phoneNumber}`;

    fetch(apiURL, {
      headers: {
        "Client-Token": "F5469623a60574c939816e0d49fc6be4eS",
      },
    })
      .then((response) => response.json())
      .then((data) => setProfilePicUrl(data.link))
      .catch((error) => {
        console.error("Erro na chamada da API: ", error);
      });

    const interval = setInterval(() => {
      setLoadingPercentage((prev) => {
        const newPercentage = prev + 1;
        if (newPercentage >= 100) {
          clearInterval(interval);
          setLoadingMessage("Processo concluído com sucesso.");
          return 100;
        } else {
          // Atualiza a mensagem com base na porcentagem de carregamento
          const messageIndex = Math.floor((newPercentage / 100) * loadingMessages.length);
          setLoadingMessage(loadingMessages[messageIndex]);
        }
        return newPercentage;
      });
    }, 600);

    // Incorporar o script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/74042c53-dfa7-44e4-8bcb-7ddb468bdd1f/players/640776e0ae8146000919722f/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumber]);

  return (
    <div>
      <div className="bg-emerald-500 w-full p-20"></div>
      <div className="mt-[-100px]">
        <div>
          <Card className="w-full md:w-[600px] m-auto p-3">
            <CardContent>
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: `url(${profilePicUrl})` }}></div>
              {phoneNumber && <div className="text-center mt-3 text-3xl font-semibold">{phoneNumber}</div>}
              <h2 className="text-center">O Whatsapp informado está sendo espionado</h2>

              {/* Loader */}
              <div className="w-72 h-5 mx-auto mt-3 border border-gray-300 rounded overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: `${loadingPercentage}%` }}></div>
              </div>
              <div className="text-center mt-2 mb-10">{loadingMessage}</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                <Card className="bg-emerald-400">
                  <CardContent>
                    <h2 className="text-lg font-bold">5</h2>
                    <p>Conversas suspeitas​</p>
                    <h3>*Conversas contendo algum contexto sexual .​</h3>
                  </CardContent>
                </Card>
                <Card className="bg-emerald-400">
                  <CardContent>
                    <h2 className="text-lg font-bold">2</h2>
                    <p>Imagens com nudez</p>
                  </CardContent>
                </Card>
                <Card className="bg-emerald-400">
                  <CardContent>
                    <h2 className="text-lg font-bold">3</h2>
                    <p>Contatos suspeitos</p>
                  </CardContent>
                </Card>
              </div>
              {/* Vídeo/Imagem Container */}
              <div id="vid_640776e0ae8146000919722f" style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                <img
                  id="thumb_640776e0ae8146000919722f"
                  src="https://images.converteai.net/74042c53-dfa7-44e4-8bcb-7ddb468bdd1f/players/640776e0ae8146000919722f/thumbnail.jpg"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div
                  id="backdrop_640776e0ae8146000919722f"
                  style={{ position: "absolute", top: 0, width: "100%", height: "100%", WebkitBackdropFilter: "blur(5px)", backdropFilter: "blur(5px)" }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SearchFB;
