"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useMutation } from "@tanstack/react-query";
import { createTopic } from "@/app/actions";

const TopicCreator = () => {
  const [input, setInput] = useState<string>("");

  const {mutate, error, isPending} = useMutation({
    mutationFn: createTopic
  })

  return (
    <div className="mt-12 flex flex-col gap-2">
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white min-w-64"
          placeholder="Enter topic here..."
        />
        <Button
          onClick={() => {
            mutate({topicName: input})
          }}
         
          disabled={isPending}
        >
            Create
        </Button>
      </div>
      {error ? <p className="text-sm text-red-600">{error.message}</p> : null}
    </div>
  );
};

export default TopicCreator;
