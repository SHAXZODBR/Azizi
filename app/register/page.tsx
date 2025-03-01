import Link from "next/link";
import { register } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md bg-blue-200">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Создать аккаунт</CardTitle>
          <CardDescription>
            Введите данные для создания нового аккаунта
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={register} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" name="name" placeholder="Иван Иванов" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            <div className="space-y-2 ">
              <Label>Тип аккаунта</Label>
              <RadioGroup
                defaultValue="user"
                name="role"
                className="flex space-x-4 "
              >
                <div className="flex items-center space-x-2 ">
                  <RadioGroupItem value="user" id="user" />
                  <Label htmlFor="user">Пользователь</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="admin"
                    id="admin"
                    className="accent-blue-900"
                  />
                  <Label htmlFor="admin">Администратор</Label>
                </div>
              </RadioGroup>
              <p className="text-xs text-gray-500">
                Примечание: Регистрация администратора требует одобрения
              </p>
            </div>
            <Button type="submit" className="w-full">
              Зарегистрироваться
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full">
            Уже есть аккаунт?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Войти
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
