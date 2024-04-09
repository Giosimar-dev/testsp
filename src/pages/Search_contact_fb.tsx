/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-irregular-whitespace */
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { AiFillMessage } from "react-icons/ai";
import { FaImages, FaMapMarkedAlt } from "react-icons/fa";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { IoIosUnlock } from "react-icons/io";

function SearchFB() {
  const [searchParams] = useSearchParams();
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const phoneNumber = searchParams.get("contact");
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [suspectConversations, setSuspectConversations] = useState(0);
  const [nudeImages, setNudeImages] = useState(0);
  const [suspectLocations, setSuspectLocations] = useState(0);

  const renderValueOrSpinner = (value: number) => {
    return value === 0 ? <ReloadIcon className="m-auto animate-spin h-5 w-5 text-gray-500" /> : value; // Substitua <Spinner /> pelo seu spinner real
  };

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

  const handleButtonClick = () => {
    window.location.href = "https://funneltools.com.br/sf/?sfunnel=417&utm_campaign=secretspyperfectpayfb"; // Substitua pela URL desejada
  };

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

          if (newPercentage % 90 === 0) {
            setSuspectConversations(Math.floor(Math.random() * 50 + 1));
            setNudeImages(Math.floor(Math.random() * 20 + 1));
            setSuspectLocations(Math.floor(Math.random() * 5 + 1));
          }
        }
        return newPercentage;
      });
    }, 600);

    return () => clearInterval(interval);
  }, [phoneNumber]);

  return (
    <div>
      <div className="bg-emerald-500 w-full p-20"></div>
      <div className="mt-[-100px]">
        <div>
          <Card className="w-full md:w-[800px] m-auto p-3">
            <CardContent>
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-center bg-cover" style={{ backgroundImage: `url(${profilePicUrl})` }}></div>
              {phoneNumber && <div className="text-center mt-3 text-3xl font-semibold">{phoneNumber}</div>}
              <h2 className="text-center">O Whatsapp informado está sendo espionado</h2>

              <div className="w-72 h-5 mx-auto mt-3 border border-gray-300 rounded overflow-hidden">
                <div className="h-full bg-green-500" style={{ width: `${loadingPercentage}%` }}></div>
              </div>
              <div className="text-center mt-2 mb-5">{loadingMessage}</div>

              {loadingPercentage >= 90 && (
                <div className="text-center">
                  <Button className="p-8 font-semibold animate-bounce" onClick={handleButtonClick}>
                    <IoIosUnlock className="size-6" />
                    <p className="ml-2 text-base">Quero acessar as informações</p>
                  </Button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-10">
                <Card className="bg-emerald-200">
                  <CardContent>
                    <AiFillMessage className="m-auto size-14 text-emerald-600 mt-2 mb-2" />
                    <h2 className="text-red-600 font-bold text-2xl text-center">{renderValueOrSpinner(suspectConversations)}</h2>
                    <p className="text-center text-emerald-600 font-bold text-base">Mensagens suspeitas​</p>
                    <h3 className="text-center font-light text-sm">*Mensagens contendo algum contexto sexual .​</h3>
                  </CardContent>
                </Card>
                <Card className="bg-emerald-200">
                  <CardContent>
                    <FaImages className="m-auto size-14 text-emerald-600 mt-2 mb-2" />
                    <h2 className="text-red-600 font-bold text-2xl text-center">{renderValueOrSpinner(nudeImages)}</h2>
                    <p className="text-center text-emerald-600 font-bold text-base">Imagens suspeitas​</p>
                    <h3 className="text-center font-light text-sm">*Imagens identificadas com conteúdos de nudes.​</h3>
                  </CardContent>
                </Card>
                <Card className="bg-emerald-200">
                  <CardContent>
                    <FaMapMarkedAlt className="m-auto size-14 text-emerald-600 mt-2 mb-2" />
                    <h2 className="text-red-600 font-bold text-2xl text-center">{renderValueOrSpinner(suspectLocations)}</h2>
                    <p className="text-center text-emerald-600 font-bold text-base">Localizações suspeitas​</p>
                    <h3 className="text-center font-light text-sm">*Localizações como motel, casa de massagem e pontos de prostituição.​</h3>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SearchFB;
