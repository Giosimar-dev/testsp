import MaskedInput from "react-input-mask";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function StartFB() {
  return (
    <div>
      <div className="bg-emerald-500 w-full p-20"></div>
      <div className="mt-[-100px]">
        <div>
          <Card className="w-full md:w-[600px] m-auto">
            <CardHeader>
              <img src="/Whatsapp-Icon.png" alt="WhatsApp Icon" className="ml-32 mr-32 mb-5" />
              <h1 className="text-center">
                Informe o número do <b>WhatsApp que pretende espionar</b>
              </h1>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <div className="flex gap-2 w-3/4 m-auto">
                      <Input defaultValue="+55" className="w-14" disabled />
                      <MaskedInput
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        mask="(99) 99999-9999"
                        maskChar={null}
                        placeholder="(21) 99999-9999"
                      />
                    </div>
                  </div>
                  <Button className="bg-emerald-500 hover:bg-emerald-500 w-3/4 m-auto">Espionar Whatsapp</Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="block text-center">
              <h1>*Esta ferramenta é 100% anônima*</h1>
              <div className="flex gap-10 justify-center mt-4">
                <img src="/android (1).png" alt="Android Icon" />
                <img src="/iphone (1).png" alt="iPhone Icon" />
                <img src="/mac-or-windows (1).png" alt="Computer Icon" />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default StartFB;
