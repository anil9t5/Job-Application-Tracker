import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@base-ui/react";
import React from "react";

export default function SignUp() {
  return <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
<Card>
  <CardHeader>
    <CardTitle>

    </CardTitle>
    <CardDescription>
      Create an account to start tracking your job applications
    </CardDescription>
  </CardHeader>
  <form>
    <CardContent>
      <div>
        <Label htmlFor="name">
          Name
        </Label>
        <Input id="name" type="text" placeholder="John Doe" required />
      </div>
    </CardContent>
  </form>
</Card>
  </div>;
}
